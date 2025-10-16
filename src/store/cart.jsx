import React from 'react'

const CartContext = React.createContext(null)

// Helper function to calculate extra charges from options
function calculateExtraCharges(item, options) {
  if (!item.options || !options) return 0
  
  let totalExtraCharges = 0
  
  // Check each option type
  Object.entries(item.options).forEach(([optionKey, optionConfig]) => {
    if (optionConfig.type === 'multi' && options[optionKey]) {
      const selectedExtras = options[optionKey]
      selectedExtras.forEach(selectedExtra => {
        // Handle both index-based and string-based values
        let choice;
        if (typeof selectedExtra === 'number') {
          // Index-based selection
          choice = optionConfig.choices[selectedExtra];
        } else {
          // String-based selection (fallback for old data)
          choice = optionConfig.choices.find(c => 
            (typeof c === 'string' ? c : c.name) === selectedExtra
          );
        }
        if (choice && typeof choice === 'object' && choice.price) {
          totalExtraCharges += choice.price
        }
      })
    }
    if (optionConfig.type === 'select' && options[optionKey] !== undefined) {
      let choice;
      if (typeof options[optionKey] === 'number') {
        // Index-based selection
        choice = optionConfig.choices[options[optionKey]];
      } else {
        // String-based selection (fallback for old data)
        choice = optionConfig.choices.find(c => 
          (typeof c === 'string' ? c : c.name) === options[optionKey]
        );
      }
      if (choice && typeof choice === 'object' && choice.price) {
        totalExtraCharges += choice.price
      }
    }
  })
  
  return totalExtraCharges
}

const initialState = (() => {
  try {
    const raw = localStorage.getItem('qr_cart')
    return raw ? JSON.parse(raw) : { items: [], customer: { name: '', type: 'pickup', timeOrTable: '' } }
  } catch {
    return { items: [], customer: { name: '', type: 'pickup', timeOrTable: '' } }
  }
})()

function reducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const { item, quantity, options } = action.payload
      const key = JSON.stringify({ id: item.id, options })
      const existing = state.items.find(i => i.key === key)
      
      // Calculate extra charges
      const extraCharges = calculateExtraCharges(item, options)
      const totalPrice = item.price + extraCharges
      
      let items
      if (existing) {
        items = state.items.map(i => i.key === key ? { 
          ...i, 
          quantity: i.quantity + quantity,
          totalPrice: totalPrice,
          extraCharges: extraCharges
        } : i)
      } else {
        items = [...state.items, { 
          key, 
          id: item.id, 
          options, 
          quantity, 
          totalPrice,
          basePrice: item.price,
          extraCharges
        }]
      }
      return { ...state, items }
    }
    case 'REMOVE': {
      return { ...state, items: state.items.filter(i => i.key !== action.key) }
    }
    case 'INC': {
      return { ...state, items: state.items.map(i => i.key === action.key ? { 
        ...i, 
        quantity: i.quantity + 1,
        totalPrice: (i.basePrice || i.price) + (i.extraCharges || 0)
      } : i) }
    }
    case 'DEC': {
      return { ...state, items: state.items.map(i => i.key === action.key ? { 
        ...i, 
        quantity: Math.max(1, i.quantity - 1),
        totalPrice: (i.basePrice || i.price) + (i.extraCharges || 0)
      } : i) }
    }
    case 'CLEAR': {
      return { ...state, items: [] }
    }
    case 'SET_CUSTOMER': {
      return { ...state, customer: { ...state.customer, ...action.payload } }
    }
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  React.useEffect(() => {
    localStorage.setItem('qr_cart', JSON.stringify(state))
  }, [state])
  const value = React.useMemo(() => ({ state, dispatch }), [state])
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  return React.useContext(CartContext)
}

export function cartTotal(items) {
  return items.reduce((sum, i) => sum + (i.totalPrice || i.price) * i.quantity, 0)
}