import React from "react";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="px-4 pt-4 sm:pt-6">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[var(--card)] via-[var(--card)]/90 to-[var(--accent)]/20">
        <div className="pointer-events-none absolute -top-12 -left-8 h-40 w-40 rounded-full bg-[var(--primary)]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-10 -right-8 h-48 w-48 rounded-full bg-[var(--accent)]/25 blur-3xl" />
        <div className="relative px-5 sm:px-8 py-6 sm:py-8 flex items-center gap-4 sm:gap-6">
          <div className="shrink-0 grid place-items-center rounded-2xl bg-white/90 p-3 sm:p-4">
            <img src="/logo.png" alt="Tably" className="h-10 w-10 sm:h-12 sm:w-12 object-contain" />
          </div>
          <div className="flex-1">
            <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
              {t("welcomessssssss")}
            </h1>
            <p className="mt-1 text-sm sm:text-base text-white/80">{t("subtitle")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
