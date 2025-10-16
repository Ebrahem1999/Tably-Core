import React from "react";
import {
  X,
  Calendar,
  Clock,
  MapPin,
  Users,
  User,
  Phone,
  MessageSquare,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import config from "../data/config.json";

export default function ReservationModal({ open, onClose }) {
  const { t, i18n } = useTranslation();
  const [form, setForm] = React.useState({
    date: new Date().toISOString().split("T")[0], // Today as default
    time: "",
    area: "",
    guests: 2,
    name: "",
    phone: "",
    notes: "",
  });

  // Get area name based on current language
  const getAreaName = (area) => {
    if (i18n.language === "ar") return area.name_ar;
    if (i18n.language === "he") return area.name_he;
    return area.name;
  };

  // Generate date options (today + next 7 days)
  const getDateOptions = () => {
    const options = [];
    const today = new Date();

    for (let i = 0; i < config.reservation.max_advance_days; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);

      const dateStr = date.toISOString().split("T")[0];
      const displayDate = date.toLocaleDateString(i18n.language, {
        weekday: "short",
        month: "short",
        day: "numeric",
      });

      options.push({ value: dateStr, label: displayDate });
    }

    return options;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Format reservation message
    const selectedArea = config.reservation.areas.find(
      (a) => a.id === form.area
    );
    const areaName = selectedArea ? getAreaName(selectedArea) : form.area;

    const message = `🍽️ *${t('reservation_request')}*

📅 *${t('date_label')}* ${new Date(form.date).toLocaleDateString(i18n.language)}
🕐 *${t('time_label')}* ${form.time}
📍 *${t('area_label')}* ${areaName}
👥 *${t('guests_label')}* ${form.guests}
👤 *${t('name_label')}* ${form.name}
📞 *${t('phone_label')}* ${form.phone}
${form.notes ? `📝 *${t('notes_label')}* ${form.notes}` : ""}

*${t('confirm_reservation')}*

${t('thank_you')}`;

    // Send via WhatsApp
    const url = `https://wa.me/${
      config.reservation.whatsapp
    }?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");

    // Show success message
    alert(
      t("reservation_sent") +
        "\n\n" +
        t("reservation_wait") +
        "\n\n" +
        t("reservation_no_response")
    );

    onClose();
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="card max-w-md w-full overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5 border-b border-white/10 flex items-center justify-between">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Calendar size={20} />
            {t("book_table")}
          </h2>
          <button className="tab" onClick={onClose}>
            <X size={16} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5 space-y-4">
          {/* Date */}
          <label className="block space-y-1">
            <div className="text-sm text-white/80 flex items-center gap-2">
              <Calendar size={14} />
              {t("reservation_date")}
            </div>
            <select
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              className="w-full bg-[var(--card)] border border-white/10 rounded-lg px-3 py-2 text-white focus:ring-2 focus:ring-green-400/30 focus:border-green-400/50 transition-all duration-200"
              required
            >
              {getDateOptions().map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          {/* Time */}
          <label className="block space-y-1">
            <div className="text-sm text-white/80 flex items-center gap-2">
              <Clock size={14} />
              {t("reservation_time")}
            </div>
            <select
              value={form.time}
              onChange={(e) => setForm({ ...form, time: e.target.value })}
              className="w-full bg-[var(--card)] border border-white/10 rounded-lg px-3 py-2 text-white focus:ring-2 focus:ring-green-400/30 focus:border-green-400/50 transition-all duration-200"
              required
            >
              <option value="">{t("reservation_time")}</option>
              {config.reservation.time_slots.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </label>

          {/* Area */}
          <label className="block space-y-1">
            <div className="text-sm text-white/80 flex items-center gap-2">
              <MapPin size={14} />
              {t("reservation_area")}
            </div>
            <select
              value={form.area}
              onChange={(e) => setForm({ ...form, area: e.target.value })}
              className="w-full bg-[var(--card)] border border-white/10 rounded-lg px-3 py-2 text-white focus:ring-2 focus:ring-green-400/30 focus:border-green-400/50 transition-all duration-200"
              required
            >
              <option value="">{t("reservation_area")}</option>
              {config.reservation.areas.map((area) => (
                <option key={area.id} value={area.id}>
                  {getAreaName(area)}
                </option>
              ))}
            </select>
          </label>

          {/* Number of Guests */}
          <label className="block space-y-1">
            <div className="text-sm text-white/80 flex items-center gap-2">
              <Users size={14} />
              {t("reservation_guests")}
            </div>
            <select
              value={form.guests}
              onChange={(e) =>
                setForm({ ...form, guests: parseInt(e.target.value) })
              }
              className="w-full bg-[var(--card)] border border-white/10 rounded-lg px-3 py-2 text-white focus:ring-2 focus:ring-green-400/30 focus:border-green-400/50 transition-all duration-200"
              required
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? t('guests_singular') : t('guests_plural')}
                </option>
              ))}
            </select>
          </label>

          {/* Name */}
          <label className="block space-y-1">
            <div className="text-sm text-white/80 flex items-center gap-2">
              <User size={14} />
              {t("reservation_name")}
            </div>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-[var(--card)] border border-white/10 rounded-lg px-3 py-2 text-white placeholder-white/40 focus:ring-2 focus:ring-green-400/30 focus:border-green-400/50 transition-all duration-200"
              required
            />
          </label>

          {/* Phone */}
          <label className="block space-y-1">
            <div className="text-sm text-white/80 flex items-center gap-2">
              <Phone size={14} />
              {t("reservation_phone")}
            </div>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full bg-[var(--card)] border border-white/10 rounded-lg px-3 py-2 text-white placeholder-white/40 focus:ring-2 focus:ring-green-400/30 focus:border-green-400/50 transition-all duration-200"
              required
            />
          </label>

          {/* Notes */}
          <label className="block space-y-1">
            <div className="text-sm text-white/80 flex items-center gap-2">
              <MessageSquare size={14} />
              {t("reservation_notes")}
            </div>
            <textarea
              rows={3}
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              className="w-full bg-[var(--card)] border border-white/10 rounded-lg px-3 py-2 text-white placeholder-white/40 focus:ring-2 focus:ring-green-400/30 focus:border-green-400/50 transition-all duration-200 resize-none"
              placeholder={t('special_requests_placeholder')}
            />
          </label>

          {/* Submit Button */}
          <button type="submit" className="btn w-full">
            {t("send_reservation")}
          </button>
        </form>
      </div>
    </div>
  );
}
