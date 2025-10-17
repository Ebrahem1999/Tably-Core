const DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function parseTimeString(timeStr) {
  if (!timeStr) return null;

  const match = timeStr.trim().match(/^(\d{1,2}):(\d{2})$/);
  if (!match) return null;

  const hours = Number.parseInt(match[1], 10);
  const minutes = Number.parseInt(match[2], 10);

  if (Number.isNaN(hours) || Number.isNaN(minutes)) return null;
  if (minutes < 0 || minutes > 59) return null;
  if (hours < 0 || hours > 24) return null;
  if (hours === 24 && minutes !== 0) return null;

  return hours * 60 + minutes;
}

function expandDayToken(token) {
  if (!token) return [];

  const cleaned = token
    .replace(/\s+/g, " ")
    .replace(/\s*[\u2013-]\s*/g, "-")
    .trim();

  if (!cleaned) return [];

  if (cleaned.includes("-")) {
    const [startKey, endKey] = cleaned.split("-");
    const startIndex = mapDayToIndex(startKey);
    const endIndex = mapDayToIndex(endKey);

    if (startIndex === -1 || endIndex === -1) return [];

    const result = [];
    let current = startIndex;
    result.push(current);
    while (current !== endIndex) {
      current = (current + 1) % DAY_NAMES.length;
      result.push(current);
      if (result.length > DAY_NAMES.length) break;
    }
    return Array.from(new Set(result));
  }

  const singleIndex = mapDayToIndex(cleaned);
  return singleIndex === -1 ? [] : [singleIndex];
}

function mapDayToIndex(dayKey = "") {
  const normalized = dayKey.slice(0, 3).toLowerCase();
  const index = DAY_NAMES.findIndex(
    (day) => day.toLowerCase() === normalized
  );
  return index;
}

function parseDayKey(dayKey) {
  if (!dayKey || typeof dayKey !== "string") return [];
  const parts = dayKey.split(",").map((part) => part.trim());
  const indices = parts.flatMap(expandDayToken);
  return Array.from(new Set(indices));
}

function buildSchedule(hoursConfig) {
  const schedule = DAY_NAMES.map(() => []);

  Object.entries(hoursConfig || {}).forEach(([dayKey, value]) => {
    const dayIndices = parseDayKey(dayKey);
    if (!dayIndices.length) return;
    if (!value || /closed/i.test(String(value))) return;

    const segments = String(value)
      .split(",")
      .map((segment) => segment.trim())
      .filter(Boolean);

    segments.forEach((segment) => {
      const timeRange = segment.replace(/\u2013/g, "-");
      const [startStr, endStr] = timeRange.split("-").map((str) => str.trim());
      const startMinutes = parseTimeString(startStr);
      const endMinutes = parseTimeString(endStr);

      if (
        startMinutes === null ||
        endMinutes === null ||
        Number.isNaN(startMinutes) ||
        Number.isNaN(endMinutes)
      ) {
        return;
      }

      dayIndices.forEach((dayIndex) => {
        if (startMinutes === endMinutes) {
          schedule[dayIndex].push({ start: 0, end: 1440 });
        } else if (startMinutes < endMinutes) {
          schedule[dayIndex].push({ start: startMinutes, end: endMinutes });
        } else {
          schedule[dayIndex].push({ start: startMinutes, end: 1440 });
          if (endMinutes > 0) {
            const nextDay = (dayIndex + 1) % DAY_NAMES.length;
            schedule[nextDay].push({ start: 0, end: endMinutes });
          }
        }
      });
    });
  });

  return schedule.map((windows) =>
    windows
      .filter(
        (window) =>
          typeof window.start === "number" &&
          typeof window.end === "number" &&
          window.start < window.end
      )
      .sort((a, b) => a.start - b.start)
  );
}

function getCurrentJerusalemTime() {
  const now = new Date();
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Jerusalem",
    weekday: "short",
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  });

  const parts = formatter.formatToParts(now);
  const weekday = parts.find((p) => p.type === "weekday")?.value ?? "";
  const hourPart = parts.find((p) => p.type === "hour")?.value ?? "0";
  const minutePart = parts.find((p) => p.type === "minute")?.value ?? "0";

  const dayIndex = DAY_NAMES.findIndex((day) => day === weekday);
  const hours = Number.parseInt(hourPart, 10);
  const minutes = Number.parseInt(minutePart, 10);

  return {
    dayIndex,
    minutes: hours * 60 + minutes,
  };
}

export function isRestaurantOpen(hoursConfig) {
  if (!hoursConfig || typeof hoursConfig !== "object") {
    return true;
  }

  const { dayIndex, minutes } = getCurrentJerusalemTime();
  if (dayIndex === -1 || Number.isNaN(minutes)) {
    return true;
  }

  const schedule = buildSchedule(hoursConfig);
  const todaysWindows = schedule[dayIndex];
  if (!todaysWindows || todaysWindows.length === 0) {
    return false;
  }

  return todaysWindows.some(
    (window) => minutes >= window.start && minutes < window.end
  );
}

export default isRestaurantOpen;
