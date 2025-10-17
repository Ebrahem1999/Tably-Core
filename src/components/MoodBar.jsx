import React from "react";
import { moodOptions } from "../data/moods";
import { useTranslation } from "react-i18next";

export default function MoodBar({ selectedMood, setSelectedMood }) {
  const { t } = useTranslation();

  const translatedMood = (key) => {
    switch (key) {
      case "הכול":
        return t("mood_all");
      case "פיצה":
        return t("mood_pizza");
      case "פסטה":
        return t("mood_pasta");
      case "בורגר":
        return t("mood_burger");
      case "כריכים":
        return t("mood_sandwiches");
      case "בשרים":
        return t("mood_meat");
      case "קינוחים":
        return t("mood_desserts");
      case "איטלקי":
        return t("mood_italian");
      case "מזרחי":
        return t("mood_middle_eastern");
      default:
        return t("mood_all");
    }
  };

  return (
    <section className="bg-[var(--card)]/70 border-b border-white/10 px-4 py-4">
      <div className="text-white font-semibold mb-3 text-lg">{t("mood_question", "מה בא לך היום? 🤔")}</div>
      <div className="flex gap-3 overflow-x-auto no-scrollbar">
        {moodOptions.map((m) => {
          const active = selectedMood === m.key;
          return (
            <button
              key={m.key}
              onClick={() => setSelectedMood(m.key)}
              className={`flex-shrink-0 w-[84px] sm:w-[92px] rounded-2xl border text-center px-3 py-3 transition ${
                active
                  ? "border-[var(--primary)] bg-[var(--primary)]/10"
                  : "border-white/10 bg-[var(--card)] hover:bg-white/10"
              }`}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-full grid place-items-center text-xl bg-white/90 text-black">
                {m.emoji}
              </div>
              <div className={`mt-2 text-xs sm:text-sm ${active ? "text-[var(--primary)]" : "text-white/80"}`}>
                {translatedMood(m.label)}
                {translatedMood(m.key)}
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
