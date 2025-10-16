import React from 'react'
import { useTranslation } from 'react-i18next'
import { Calendar, Clock, MapPin, Users, MessageCircle, Phone } from 'lucide-react'
import config from '../data/config.json'
import ReservationModal from '../components/ReservationModal'

export default function ReservationPage() {
  const { t, i18n } = useTranslation()
  const [showModal, setShowModal] = React.useState(false)

  // Get area name based on current language
  const getAreaName = (area) => {
    if (i18n.language === 'ar') return area.name_ar
    if (i18n.language === 'he') return area.name_he
    return area.name
  }

  return (
    <div className="py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-4">
          {t('book_table')}
        </h1>
        <p className="text-white/70 max-w-2xl mx-auto">
          {t('reservation_description')}
        </p>
      </div>

      {/* Restaurant Info */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="card p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Clock size={20} />
            {t('open_hours')}
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>{t('sun_thu')}</span>
              <span>{config.hours['sun-thu']}</span>
            </div>
            <div className="flex justify-between">
              <span>{t('fri')}</span>
              <span>{config.hours['fri']}</span>
            </div>
            <div className="flex justify-between">
              <span>{t('sat')}</span>
              <span>{config.hours['sat']}</span>
            </div>
          </div>
        </div>

        <div className="card p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <MapPin size={20} />
            {t('reservation_area')}
          </h3>
          <div className="space-y-2">
            {config.reservation.areas.map(area => (
              <div key={area.id} className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>{getAreaName(area)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reservation Form Preview */}
      <div className="card p-6 mb-8">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Calendar size={20} />
          {t('reservation')}
        </h3>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-2">
              <Calendar size={24} className="text-green-400" />
            </div>
            <div className="text-sm font-medium">1. {t('reservation_date')}</div>
            <div className="text-xs text-white/60">{t('choose_date')}</div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-400/20 rounded-full flex items-center justify-center mx-auto mb-2">
              <Clock size={24} className="text-blue-400" />
            </div>
            <div className="text-sm font-medium">2. {t('reservation_time')}</div>
            <div className="text-xs text-white/60">{t('select_time')}</div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-2">
              <Users size={24} className="text-purple-400" />
            </div>
            <div className="text-sm font-medium">3. {t('reservation_guests')}</div>
            <div className="text-xs text-white/60">{t('number_people')}</div>
          </div>
        </div>
        <button 
          onClick={() => setShowModal(true)}
          className="btn w-full"
        >
          {t('book_table')}
        </button>
      </div>

      {/* Important Notice */}
      <div className="card p-6 bg-blue-500/10 border-blue-500/20">
        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
          <MessageCircle size={20} />
          {t('important_notice')}
        </h3>
        <div className="space-y-2 text-sm text-white/80">
          <p>• {t('reservation_wait')}</p>
          <p>• {t('reservation_no_response')}</p>
        </div>
        <div className="mt-4 flex items-center gap-2 text-sm">
          <Phone size={16} />
          <span>{t('need_assistance')} </span>
          <a href={`tel:${config.phone}`} className="text-green-400 hover:underline">
            {config.phone}
          </a>
        </div>
      </div>

      <ReservationModal open={showModal} onClose={() => setShowModal(false)} />
    </div>
  )
}
