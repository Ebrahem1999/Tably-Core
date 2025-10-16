import React from 'react'
import { X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import config from '../data/config.json'
import { useAnimation } from '../contexts/AnimationContext'

export default function OptionModal({ open, onClose, item, onConfirm }) {
  const { t } = useTranslation()
  const { triggerAnimation } = useAnimation()
  const [quantity, setQuantity] = React.useState(1)
  const [form, setForm] = React.useState({})
  
  // Calculate total price including extras and size
  const calculateTotal = () => {
    if (!item) return 0
    
    let extraCharges = 0
    if (item.options) {
      Object.entries(item.options).forEach(([optionKey, optionConfig]) => {
        if (optionConfig.type === 'multi' && form[optionKey]) {
          const selectedExtras = form[optionKey]
          selectedExtras.forEach(selectedExtra => {
            const choice = optionConfig.choices.find(c => 
              (typeof c === 'string' ? c : c.name) === selectedExtra
            )
            if (choice && typeof choice === 'object' && choice.price) {
              extraCharges += choice.price
            }
          })
        }
        if (optionConfig.type === 'select' && form[optionKey]) {
          const selectedChoice = optionConfig.choices.find(c => 
            (typeof c === 'string' ? c : c.name) === form[optionKey]
          )
          if (selectedChoice && typeof selectedChoice === 'object' && selectedChoice.price) {
            extraCharges += selectedChoice.price
          }
        }
      })
    }
    
    return (item.price + extraCharges) * quantity
  }

  React.useEffect(() => {
    if (item?.options) {
      const init = {}
      for (const [key, cfg] of Object.entries(item.options)) {
        if (cfg.type === 'single') init[key] = cfg.choices[0]
        if (cfg.type === 'select') init[key] = cfg.choices[0].name || cfg.choices[0]
        if (cfg.type === 'multi') init[key] = []
        if (cfg.type === 'text') init[key] = ''
      }
      setForm(init)
      setQuantity(1)
    }
  }, [item])

  if (!open || !item) return null

  const onSubmit = () => {
    // Convert form options to store choice indices instead of values
    const processedOptions = {}
    if (item.options) {
      Object.entries(item.options).forEach(([key, config]) => {
        const selectedValue = form[key]
        if (selectedValue !== undefined && selectedValue !== null && selectedValue !== '') {
          if (config.type === 'text') {
            // Text fields: store the text value directly
            processedOptions[key] = selectedValue
          } else if (Array.isArray(selectedValue)) {
            // Multi-select: store indices
            processedOptions[key] = selectedValue.map(val => {
              const index = config.choices.findIndex(c => 
                (typeof c === 'string' ? c : c.name) === val
              )
              return index >= 0 ? index : val
            })
          } else {
            // Single-select: store index
            const index = config.choices.findIndex(c => 
              (typeof c === 'string' ? c : c.name) === selectedValue
            )
            processedOptions[key] = index >= 0 ? index : selectedValue
          }
        }
      })
    }
    
    // Add item to cart immediately
    onConfirm({ quantity, options: processedOptions })
    
    // Close popup immediately
    onClose()
    
    // Start animation after popup closes
    setTimeout(() => {
      triggerAnimation(item)
    }, 100) // Small delay to ensure popup closes first
  }

  const renderField = (key, cfg) => {
    if (cfg.type === 'single') {
      return (
        <label className="block space-y-1">
          <div className="text-sm text-white/80">{cfg.label}</div>
          <select 
            value={form[key]} 
            onChange={e=>setForm({...form, [key]: e.target.value})}
            className="w-full bg-[var(--card)] border border-white/10 rounded-lg px-3 py-2 text-white focus:ring-2 focus:ring-green-400/30 focus:border-green-400/50 transition-all duration-200"
          >
            {cfg.choices.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </label>
      )
    }
    if (cfg.type === 'select') {
      const selectedValue = form[key]
      const selectChoice = (choice) => {
        const choiceName = typeof choice === 'string' ? choice : choice.name
        setForm({...form, [key]: choiceName})
      }
      return (
        <div className="space-y-1">
          <div className="text-sm text-white/80">{cfg.label}</div>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {cfg.choices.map(choice => {
              const choiceName = typeof choice === 'string' ? choice : choice.name
              const choicePrice = typeof choice === 'object' ? choice.price : 0
              const isSelected = selectedValue === choiceName
              return (
                <button 
                  type="button" 
                  key={choiceName} 
                  onClick={()=>selectChoice(choice)} 
                  className={`tab text-xs sm:text-sm ${isSelected 
                    ? 'bg-green-500/20 border-green-400/50 text-green-400 ring-2 ring-green-400/30' 
                    : 'hover:bg-white/5'
                  } flex items-center gap-1 transition-all duration-200`}
                >
                  <span className="truncate">{choiceName}</span>
                  {choicePrice > 0 && (
                    <span className="text-xs text-green-400 flex-shrink-0">+{choicePrice}{config.currency}</span>
                  )}
                </button>
              )
            })}
          </div>
        </div>
      )
    }
    if (cfg.type === 'multi') {
      const arr = form[key] || []
      const toggle = (choice) => {
        const choiceName = typeof choice === 'string' ? choice : choice.name
        const exists = arr.includes(choiceName)
        const next = exists ? arr.filter(x=>x!==choiceName) : [...arr, choiceName]
        setForm({...form, [key]: next})
      }
      return (
        <div className="space-y-1">
          <div className="text-sm text-white/80">{cfg.label}</div>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {cfg.choices.map(choice => {
              const choiceName = typeof choice === 'string' ? choice : choice.name
              const choicePrice = typeof choice === 'object' ? choice.price : 0
              const isSelected = arr.includes(choiceName)
              return (
                <button 
                  type="button" 
                  key={choiceName} 
                  onClick={()=>toggle(choice)} 
                  className={`tab text-xs sm:text-sm ${isSelected 
                    ? 'bg-green-500/20 border-green-400/50 text-green-400 ring-2 ring-green-400/30' 
                    : 'hover:bg-white/5'
                  } flex items-center gap-1 transition-all duration-200`}
                >
                  <span className="truncate">{choiceName}</span>
                  {choicePrice > 0 && (
                    <span className="text-xs text-green-400 flex-shrink-0">+{choicePrice}{config.currency}</span>
                  )}
                </button>
              )
            })}
          </div>
        </div>
      )
    }
    if (cfg.type === 'text') {
      return (
        <label className="block space-y-1">
          <div className="text-sm text-white/80">{cfg.label}</div>
          <textarea 
            rows={2} 
            value={form[key]||''} 
            onChange={e=>setForm({...form, [key]: e.target.value})}
            className="w-full bg-[var(--card)] border border-white/10 rounded-lg px-3 py-2 text-white placeholder-white/40 focus:ring-2 focus:ring-green-400/30 focus:border-green-400/50 transition-all duration-200 resize-none"
          />
        </label>
      )
    }
    return null
  }

  return (
    <div className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4" onClick={onClose}>
      <div className="card max-w-lg sm:max-w-xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <div className="relative">
          <img src={item.image} alt={item.name} className="w-full h-48 sm:h-56 object-cover" />
          <button className="absolute top-2 end-2 sm:top-3 sm:end-3 bg-black/60 rounded-full p-1.5 sm:p-2" onClick={onClose}><X size={16} className="sm:w-5 sm:h-5"/></button>
        </div>
        <div className="p-3 sm:p-5 space-y-3">
          <div className="flex items-start justify-between gap-2">
            <div className="text-lg sm:text-xl font-semibold flex-1 min-w-0">{item.name}</div>
            <div className="text-base sm:text-lg font-bold text-green-400 flex-shrink-0">
              {item.price}{item.price > 0 && config.currency}
            </div>
          </div>
          <div className="text-sm sm:text-base text-white/70 line-clamp-2">{item.desc}</div>

          <div className="grid gap-3">
            {item.options && Object.entries(item.options).map(([key, cfg]) => (
              <div key={key}>{renderField(key, cfg)}</div>
            ))}
          </div>

          {/* Price breakdown */}
          {(() => {
            const extraCharges = calculateTotal() - (item.price * quantity)
            if (extraCharges > 0) {
              // Calculate individual charges for size and extras
              let sizeCharge = 0
              let extrasCharge = 0
              
              if (item.options) {
                Object.entries(item.options).forEach(([optionKey, optionConfig]) => {
                  if (optionConfig.type === 'select' && form[optionKey]) {
                    // Size option
                    const selectedChoice = optionConfig.choices.find(c => 
                      (typeof c === 'string' ? c : c.name) === form[optionKey]
                    )
                    if (selectedChoice && typeof selectedChoice === 'object' && selectedChoice.price) {
                      sizeCharge += selectedChoice.price * quantity
                    }
                  } else if (optionConfig.type === 'multi' && form[optionKey]) {
                    // Extras option
                    const selectedExtras = form[optionKey]
                    selectedExtras.forEach(selectedExtra => {
                      const choice = optionConfig.choices.find(c => 
                        (typeof c === 'string' ? c : c.name) === selectedExtra
                      )
                      if (choice && typeof choice === 'object' && choice.price) {
                        extrasCharge += choice.price * quantity
                      }
                    })
                  }
                })
              }
              
              return (
                <div className="bg-black/20 border border-white/10 rounded-lg p-3 space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>{t('base_price')}:</span>
                    <span>{item.price * quantity}{(item.price * quantity) > 0 && config.currency}</span>
                  </div>
                  {sizeCharge > 0 && (
                    <div className="flex justify-between text-sm text-green-400">
                      <span>{t('opt_size')}:</span>
                      <span>+{sizeCharge}{config.currency}</span>
                    </div>
                  )}
                  {extrasCharge > 0 && (
                    <div className="flex justify-between text-sm text-green-400">
                      <span>{t('opt_extras')}:</span>
                      <span>+{extrasCharge}{config.currency}</span>
                    </div>
                  )}
                  <div className="border-t border-white/10 pt-1 flex justify-between font-semibold">
                    <span>{t('total')}:</span>
                    <span className="text-green-400">{calculateTotal()}{calculateTotal() > 0 && config.currency}</span>
                  </div>
                </div>
              )
            }
            return null
          })()}

          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2 border-t border-white/10">
            <div className="flex items-center gap-2">
              <button className="tab text-sm" onClick={()=>setQuantity(Math.max(1, quantity-1))}>-</button>
              <div className="min-w-[2rem] text-center text-sm">{quantity}</div>
              <button className="tab text-sm" onClick={()=>setQuantity(quantity+1)}>+</button>
            </div>
            <div className="flex-1 text-center sm:text-right">
              <div className="text-xs sm:text-sm text-white/60">{t('total')}:</div>
              <div className="text-base sm:text-lg font-bold text-green-400">
                {calculateTotal()}{config.currency}
              </div>
            </div>
            <button className="btn w-full sm:w-auto text-sm sm:text-base" onClick={onSubmit}>{t('add_to_cart')}</button>
          </div>
        </div>
      </div>
    </div>
  )
}