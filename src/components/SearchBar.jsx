import React from 'react'
import { useTranslation } from 'react-i18next'

export default function SearchBar({ value, onChange }) {
  const { t } = useTranslation()
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={t('search_placeholder')}
      className="w-full"
    />
  )
}