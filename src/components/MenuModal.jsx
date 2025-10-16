import React from "react";
import { X, ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function MenuModal({ url, name, onClose }) {
  const { t } = useTranslation();
  const [loaded, setLoaded] = React.useState(false);

  if (!url) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-5xl h-[85vh] bg-[var(--card)] rounded-2xl overflow-hidden shadow-lg border border-white/10 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-3 sm:p-4 bg-[var(--card)] border-b border-white/10">
          <h2 className="text-white font-semibold text-lg truncate">{name}</h2>

          <div className="flex items-center gap-2">
            {/* 🌐 Open full site button */}
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs sm:text-sm text-[var(--primary)] hover:underline"
            >
              <ExternalLink size={16} /> {t("open_full_site")}
            </a>

            {/* ❌ Close button */}
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 transition"
              aria-label={t("close")}
            >
              <X size={20} className="text-white" />
            </button>
          </div>
        </div>

        {/* Iframe container */}
        <div className="flex-1 relative">
          {!loaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-[var(--card)] text-white/60">
              <div className="h-8 w-8 border-2 border-white/30 border-t-[var(--primary)] rounded-full animate-spin"></div>
            </div>
          )}

          <iframe
            src={url}
            onLoad={() => setLoaded(true)}
            title={name}
            className="w-full h-full border-none rounded-b-2xl"
            allow="fullscreen; clipboard-read; clipboard-write; geolocation; camera; microphone"
          />
        </div>
      </div>
    </div>
  );
}
