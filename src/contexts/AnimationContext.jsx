import React, { createContext, useContext, useState } from 'react'

const AnimationContext = createContext()

export function AnimationProvider({ children }) {
  const [animation, setAnimation] = useState(null)

  const triggerAnimation = (item) => {
    setAnimation(item)
    
    // Reset animation after completion
    setTimeout(() => {
      setAnimation(null)
    }, 800)
  }

  return (
    <AnimationContext.Provider value={{ animation, triggerAnimation }}>
      {children}
    </AnimationContext.Provider>
  )
}

export function useAnimation() {
  return useContext(AnimationContext)
}
