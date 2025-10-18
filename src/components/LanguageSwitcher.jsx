import React from "react";
import i18n from "../i18n";
import { Globe, ChevronDown } from "lucide-react";

export function LanguageSwitcher() {
  const [lang, setLang] = React.useState(i18n.language);
  const [isOpen, setIsOpen] = React.useState(false);
  
  const languages = [
    { code: "ar", name: "العربية" },
    { code: "he", name: "עברית" },
    { code: "en", name: "English" }
  ];
  
  const currentLang = languages.find(l => l.code === lang) || languages[0];
  
  const changeLang = (newLang) => {
    setLang(newLang);
    i18n.changeLanguage(newLang);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="tab flex items-center gap-2 min-w-[80px] justify-between"
      >
        <div className="flex items-center gap-2">
          <Globe size={16} className="opacity-70" />
          <span className="text-sm font-medium">{currentLang.code.toUpperCase()}</span>
        </div>
        <ChevronDown 
          size={14} 
          className={`opacity-70 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute top-full right-0 mt-2 bg-[var(--card)] border border-white/10 rounded-lg shadow-xl z-50 min-w-[120px] overflow-hidden">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => changeLang(language.code)}
                className={`w-full px-3 py-2 text-left hover:bg-white/5 transition-colors flex items-center justify-between text-sm ${
                  language.code === lang ? 'bg-white/10 text-green-400' : 'text-white/80'
                }`}
              >
                <span className="font-medium">{language.name}</span>
                {language.code === lang && (
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
