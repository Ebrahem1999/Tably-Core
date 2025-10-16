import React from 'react'
import { useCart } from '../store/cart'
import { ShoppingCart } from 'lucide-react'

export function CartButton({ onClick }) {
  const { state } = useCart()
  const count = state.items.reduce((s,i)=>s+i.quantity,0)
  return (
    <button onClick={onClick} className="relative tab">
      <ShoppingCart size={18} />
      {count > 0 && (
        <span className="absolute -top-2 -end-2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5">{count}</span>
      )}
    </button>
  )
}