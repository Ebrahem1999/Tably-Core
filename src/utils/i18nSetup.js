import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { localeResources } from '../index.js'

/**
 * Initialize i18n with Tably Core's locale resources
 * @param {string} defaultLanguage - Default language (default: 'en')
 * @param {object} options - Additional i18n options
 * @returns {Promise} - Promise that resolves when i18n is initialized
 */
export function initializeTablyI18n(defaultLanguage = 'en', options = {}) {
  const defaultOptions = {
    resources: localeResources,
    lng: defaultLanguage,
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    ...options
  }

  return i18n
    .use(initReactI18next)
    .init(defaultOptions)
}

/**
 * Get the locale resources for manual i18n setup
 * @returns {object} - Locale resources object
 */
export function getTablyLocaleResources() {
  return localeResources
}

/**
 * Check if a translation key exists in all locales
 * @param {string} key - Translation key to check
 * @returns {boolean} - True if key exists in all locales
 */
export function hasTranslationKey(key) {
  return Object.values(localeResources).every(resource => 
    resource.translation && resource.translation[key] !== undefined
  )
}

/**
 * Get all available translation keys
 * @returns {string[]} - Array of all translation keys
 */
export function getAllTranslationKeys() {
  const keys = new Set()
  Object.values(localeResources).forEach(resource => {
    if (resource.translation) {
      Object.keys(resource.translation).forEach(key => keys.add(key))
    }
  })
  return Array.from(keys)
}
