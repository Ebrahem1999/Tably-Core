import React from "react";
import { Heart, Instagram } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t, i18n } = useTranslation();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--card)]/50 backdrop-blur-md border-t border-white/10 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          
          {/* App Info */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold text-white mb-3">
              🍽️ {t("appName", "Tably")}
            </h3>
            <p className="text-sm text-white/70 mb-4">
              {t("footerDescription", "גלה את המסעדות הטובות ביותר")}
            </p>
           
          </div>

          {/* Follow Us */}
          <div className="text-center md:text-left">
            <h4 className="text-base font-medium text-white mb-3">
              {t("followUs", "עקבו אחרינו")}
            </h4>
            <a 
              href="https://www.instagram.com/tably.menu?igsh=ZGR5cTY3Njh1NGF5" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={18} className="text-white/80" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
            <div className="text-center sm:text-right">
              © {currentYear} {t("appName", "שפרעם אוכל")}. {t("allRightsReserved", "כל הזכויות שמורות")}
            </div>
            <div className="text-center sm:text-left">
              {t("poweredBy", "מופעל על ידי")} <span className="text-[var(--primary)]">Tably</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
