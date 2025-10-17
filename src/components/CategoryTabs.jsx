import React from "react";
import { useTranslation } from "react-i18next";

export default function CategoryTabs({ categories, current, onChange }) {
  const { t } = useTranslation();
  return (
    <div className="relative">
      {/* Left fade gradient */}
      <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-[var(--bg)] to-transparent z-10 pointer-events-none"></div>
      {/* Right fade gradient */}
      <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-[var(--bg)] to-transparent z-10 pointer-events-none"></div>
      {/* Scrollable container */}
      <div className="flex gap-2 overflow-x-auto py-3 px-2 no-scrollbar scroll-smooth">
      <button
        className={`tab ${current === "all" 
          ? "bg-red-500/20 border-red-400/50 text-red-400 ring-2 ring-red-400/30" 
          : "hover:bg-white/5"
        } transition-all duration-200`}
        onClick={() => onChange("all")}
      >
        {t("all")}
      </button>
      {categories.map((c) => (
        <button
          key={c.id}
          className={`tab ${current === c.id 
            ? "bg-red-500/20 border-red-400/50 text-red-400 ring-2 ring-red-400/30" 
            : "hover:bg-white/5"
          } transition-all duration-200`}
          onClick={() => onChange(c.id)}
        >
          <span className="text-lg">{c.emoji}</span>
          <span>{c.title}</span>
        </button>
      ))}
      </div>
    </div>
  );
}
