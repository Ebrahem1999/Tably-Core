import React from "react";
import config from "../data/config.json";
import { useTranslation } from "react-i18next";
import { Phone, MessageCircle, MapPin, Instagram } from "lucide-react";

export default function ContactPage() {
  const { t } = useTranslation();
  return (
    <div className="py-10 max-w-3xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold">{t("contact")}</h1>
      <div className="card p-6 grid sm:grid-cols-2 gap-4">
        <a className="btn" href={`tel:${config.phone}`}>
          <Phone size={18} /> {t("call")}
        </a>
        <a className="btn-outline" href={`https://wa.me/${config.whatsapp}`}>
          <MessageCircle size={18} /> {t("whatsapp")}
        </a>
        <a
          className="btn-outline"
          href={`https://instagram.com/${config.instagram}`}
          target="_blank"
          rel="noreferrer"
        >
          <Instagram size={18} /> {t("instagram")}
        </a>
        <a
          className="btn-outline sm:col-span-2"
          target="_blank"
          rel="noreferrer"
          href={`https://maps.google.com/?q=${encodeURIComponent(
            config.address
          )}`}
        >
          <div className="flex items-center gap-2 justify-center">
            <MapPin size={18} /> {t("address")}: {config.address}
          </div>
        </a>
      </div>
      <iframe
        className="w-full h-80 rounded-2xl border border-white/10"
        loading="lazy"
        allowFullScreen
        src={`https://www.google.com/maps?q=${encodeURIComponent(
          config.address
        )}&output=embed`}
        title="map"
      />
    </div>
  );
}
