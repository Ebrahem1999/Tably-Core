import React from 'react'
import QRCode from 'qrcode.react'
import { useTranslation } from 'react-i18next'

export default function QRPage() {
  const { t } = useTranslation()
  const [url, setUrl] = React.useState(window.location.origin)
  const canvasRef = React.useRef(null)

  const download = () => {
    const canvas = canvasRef.current.querySelector('canvas')
    if (!canvas) return
    const a = document.createElement('a')
    a.href = canvas.toDataURL('image/png')
    a.download = 'qr-menu.png'
    a.click()
  }

  return (
    <div className="py-10 max-w-lg mx-auto space-y-4 text-center">
      <h1 className="text-3xl font-bold">{t('qr')}</h1>
      <div className="card p-6 flex flex-col items-center gap-4">
        <div ref={canvasRef} className="bg-white p-4 rounded-2xl">
          <QRCode value={url} size={256} includeMargin />
        </div>
        <input value={url} onChange={e=>setUrl(e.target.value)} className="w-full" />
        <button className="btn w-full" onClick={download}>PNG</button>
      </div>
    </div>
  )
}