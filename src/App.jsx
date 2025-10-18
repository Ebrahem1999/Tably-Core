import React from "react";
import { Routes, Route, NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import MenuPage from "./pages/Menu";
import QRPage from "./pages/QR";
import ContactPage from "./pages/Contact";
import ReservationPage from "./pages/Reservation";
import TermsPage from "./pages/Terms";
import PrivacyPage from "./pages/Privacy";
import AccessibilityPage from "./pages/Accessibility";
import config from "./data/config.json";
import en from "./data/menu.en.json";
import he from "./data/menu.he.json";
import ar from "./data/menu.ar.json";
import { LanguageSwitcher } from "./components/LanguageSwitcher";

const MENUS = { en, he, ar };
import { Phone, MapPin, MessageCircle, Instagram, Calendar } from "lucide-react";
import { CartButton } from "./components/CartButton";
import { CartDrawer } from "./components/CartDrawer";
import { AnimationProvider, useAnimation } from "./contexts/AnimationContext";
import { trackVisit } from "./utils/analytics";

function Header() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-4">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <img
            src={config.logo}
            alt="logo"
            className="w-9 h-9 rounded-xl ring-1 ring-white/10"
          />
        </button>
        <div className="flex-1">
          <div className="font-semibold tracking-wide">{config.name}</div>
          <div className="text-xs text-white/60">{config.address}</div>
        </div>
        <nav className="hidden md:flex items-center gap-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `tab ${isActive ? "ring-1 ring-white/20" : ""}`
            }
          >
            {t("menu")}
          </NavLink>
          <NavLink to="/contact" className="tab">
            {t("contact")}
          </NavLink>
          {config.reservation.enabled && (
            <NavLink to="/reservation" className="tab">
              {t("reservation")}
            </NavLink>
          )}
          <NavLink to="/qr" className="tab">
            {t("qr")}
          </NavLink>
        </nav>
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <CartButton onClick={() => setOpen(true)} />
        </div>
      </div>
      <CartDrawer open={open} onClose={() => setOpen(false)} menuData={MENUS} />
    </header>
  );
}

function Footer() {
  const { t } = useTranslation();
  const wazeUrl = config.coords
    ? `https://waze.com/ul?ll=${config.coords.lat},${config.coords.lng}&navigate=yes`
    : `https://waze.com/ul?q=${encodeURIComponent(
        config.address
      )}&navigate=yes`;

  return (
    <footer className="border-t border-white/10 mt-14">
      <div className="max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-6 text-sm">
        <div>
          <div className="font-semibold mb-2">{config.name}</div>
          <div className="text-white/70">
            {t("address")}: {config.address}
          </div>
        </div>

        <div className="space-y-2">
          <div className="font-semibold">{t("open_hours")}</div>
          {Object.entries(config.hours).map(([day, hours]) => {
            const dayKey = `day_${day.toLowerCase()}`;
            const translatedDay = t(dayKey, { defaultValue: day.charAt(0).toUpperCase() + day.slice(1) });
            const translatedHours = hours.toLowerCase() === 'closed' ? t("closed") : hours;
            return (
              <div key={day} className="text-white/70">
                {translatedDay}: {translatedHours}
              </div>
            );
          })}
        </div>

        {/* ACTION BUTTONS: wrap + span full width on md+ */}
        <div className="flex flex-wrap justify-center gap-2 md:col-span-3">
          <a
            className="btn-outline shrink-0 whitespace-nowrap min-w-[140px] justify-center px-3 sm:px-5"
            href={`tel:${config.phone}`}
          >
            <Phone size={16} /> {t("call")}
          </a>

          <a
            className="btn-outline shrink-0 whitespace-nowrap min-w-[140px] justify-center px-3 sm:px-5"
            href={`https://wa.me/${config.whatsapp}`}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={16} /> {t("whatsapp")}
          </a>

          {config.reservation.enabled && (
            <NavLink
              to="/reservation"
              className="btn-outline shrink-0 whitespace-nowrap min-w-[140px] justify-center px-3 sm:px-5"
            >
              <Calendar size={16} /> {t("reservation")}
            </NavLink>
          )}

          <a
            className="btn-outline shrink-0 whitespace-nowrap min-w-[140px] justify-center px-3 sm:px-5"
            href={`https://instagram.com/${config.instagram}`}
            target="_blank"
            rel="noreferrer"
          >
            <span className="inline-flex items-center gap-2">
              <Instagram size={16} /> {t("instagram")}
            </span>
          </a>

          <a
            className="btn-outline shrink-0 whitespace-nowrap min-w-[140px] justify-center px-3 sm:px-5"
            href={wazeUrl}
            target="_blank"
            rel="noreferrer"
          >
            <span className="inline-flex items-center gap-2">
              <MapPin size={16} /> {t("location")}
            </span>
          </a>
        </div>
      </div>
      
      {/* Footer Links */}
      <div className="border-t border-white/5 mt-6 pt-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 text-sm text-white/60">
            <NavLink to="/terms" className="hover:text-white/80 transition-colors">
              {t("terms_of_service")}
            </NavLink>
            <NavLink to="/privacy" className="hover:text-white/80 transition-colors">
              {t("privacy_policy")}
            </NavLink>
            <NavLink to="/accessibility" className="hover:text-white/80 transition-colors">
              {t("accessibility_statement")}
            </NavLink>
          </div>
        </div>
      </div>
      
      {/* Powered by Tably */}
      <div className="border-t border-white/5 mt-6 pt-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
            <div className="flex items-center gap-2">
              <span>Powered by <span className="font-semibold text-white/70">Tably</span></span>
            </div>
            <div className="text-white/40" dir="auto">
              © {new Date().getFullYear()} All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function AppContent() {
  const { animation } = useAnimation();

  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-6xl mx-auto px-4">
        <Routes>
          <Route path="/" element={<MenuPage menuData={MENUS} />} />
          <Route path="/contact" element={<ContactPage />} />
          {config.reservation.enabled && (
            <Route path="/reservation" element={<ReservationPage />} />
          )}
          <Route path="/qr" element={<QRPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/accessibility" element={<AccessibilityPage />} />
        </Routes>
      </main>
      <Footer />
      
      {/* Flying animation overlay */}
      {animation && (
        <div className="fixed inset-0 pointer-events-none z-[70]">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg animate-fly-to-cart">
              <img src={animation.image} alt={animation.name} className="w-12 h-12 object-cover rounded-full" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function App() {
  React.useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty("--primary", config.theme.primary);
    r.style.setProperty("--accent", config.theme.accent);
    r.style.setProperty("--bg", config.theme.bg);
    r.style.setProperty("--card", config.theme.card);
    r.style.setProperty("--text", config.theme.text);
    
    // Track website visit (non-blocking)
    trackVisit().catch(error => {
      console.warn('Failed to track visit:', error);
    });
  }, []);

  return (
    <AnimationProvider>
      <AppContent />
    </AnimationProvider>
  );
}
