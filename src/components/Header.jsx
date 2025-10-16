import React from "react";
import { MapPin, ChevronDown, Globe } from "lucide-react";
import { availableCities } from "../data/cities";
import { useTranslation } from "react-i18next";

export default function Header({
  displayedCity,
  loading,
  error,
  setDropdownOpen,
  dropdownOpen,
  setManualCity,
  manualCity,
}) {
  const { t, i18n } = useTranslation();
  const [langDropdownOpen, setLangDropdownOpen] = React.useState(false);

  const langs = [
    { code: "he", name: "עברית" },
    { code: "en", name: "English" },
    { code: "ar", name: "العربية" },
  ];

  React.useEffect(() => {
    const close = (e) => {
      if (!e.target.closest(".dropdown")) setLangDropdownOpen(false);
    };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  return (
    <header className="sticky top-0 z-20 bg-[var(--card)]/90 backdrop-blur-md border-b border-white/10 px-4 py-3 flex items-center justify-between relative">
      {/* Left: Location Section */}
      <div className="flex items-center gap-2 text-sm relative dropdown">
        <MapPin className="text-[var(--accent)]" size={18} />
        <div>
          <div className="font-medium text-white">{t("location")}</div>

          {loading && <div className="text-xs text-white/70">{t("requestingLocation")}</div>}
          {error && <div className="text-xs text-red-400">{error}</div>}

          <button
            onClick={() => setDropdownOpen((v) => !v)}
            className="flex items-center gap-1 text-xs text-[var(--primary)] hover:underline"
          >
            {displayedCity}
            <ChevronDown size={14} />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 bg-[var(--card)] border border-white/10 rounded-xl shadow-lg overflow-hidden z-40 w-44">
              {Object.keys(availableCities).map((city) => (
                <button
                  key={city}
                  onClick={() => {
                    setManualCity(city);
                    setDropdownOpen(false);
                  }}
                  className={`w-full text-right px-4 py-2 text-sm hover:bg-white/10 ${
                    manualCity === city ? "text-[var(--primary)]" : "text-white"
                  }`}
                >
                  {city}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Right: Language Dropdown */}
      <div className="relative dropdown">
        <button
          onClick={() => setLangDropdownOpen((v) => !v)}
          className="flex items-center gap-1 text-xs sm:text-sm bg-[var(--card)]/70 border border-white/10 text-white px-3 py-2 rounded-xl hover:bg-white/10 transition"
        >
          <Globe size={16} />
          {i18n.language === "he"
            ? "עברית"
            : i18n.language === "en"
            ? "English"
            : "العربية"}
          <ChevronDown size={14} />
        </button>

        {langDropdownOpen && (
          <div className="absolute left-0 mt-2 w-36 rounded-xl bg-[var(--card)] border border-white/10 shadow-lg overflow-hidden z-50">
            {langs.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  i18n.changeLanguage(lang.code);
                  setLangDropdownOpen(false);
                }}
                className={`block w-full text-right px-4 py-2 text-sm hover:bg-white/10 ${
                  i18n.language === lang.code
                    ? "text-[var(--primary)]"
                    : "text-white"
                }`}
              >
                {lang.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
