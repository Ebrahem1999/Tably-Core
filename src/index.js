// Core Components
export { CartButton } from './components/CartButton.jsx'
export { CartDrawer } from './components/CartDrawer.jsx'
export { default as CategoryTabs } from './components/CategoryTabs.jsx'
export { default as ImageLightbox } from './components/ImageLightbox.jsx'
export { default as ItemCard } from './components/ItemCard.jsx'
export { LanguageSwitcher } from './components/LanguageSwitcher.jsx'
export { default as OptionModal } from './components/OptionModal.jsx'
export { default as ReservationModal } from './components/ReservationModal.jsx'
export { default as SearchBar } from './components/SearchBar.jsx'

// Contexts
export { AnimationProvider, useAnimation } from './contexts/AnimationContext.jsx'

// Store
export { CartProvider, useCart, cartTotal } from './store/cart.jsx'

// Pages
export { default as AccessibilityPage } from './pages/Accessibility.jsx'
export { default as ContactPage } from './pages/Contact.jsx'
export { default as MenuPage } from './pages/Menu.jsx'
export { default as PrivacyPage } from './pages/Privacy.jsx'
export { default as QRPage } from './pages/QR.jsx'
export { default as ReservationPage } from './pages/Reservation.jsx'
export { default as TermsPage } from './pages/Terms.jsx'

// Utils
export * from './utils/timeUtils.js'
export * from './utils/i18nSetup.js'

// Styles
import './styles/index.css'

// i18n
export { default as i18n, applyDir } from './i18n.js'

// Locales
export { default as enLocales } from './locales/en.json'
export { default as heLocales } from './locales/he.json'
export { default as arLocales } from './locales/ar.json'

// Locale Resources (for advanced usage)
import en from './locales/en.json'
import he from './locales/he.json'
import ar from './locales/ar.json'

export const localeResources = {
  en: { translation: en },
  he: { translation: he },
  ar: { translation: ar }
}