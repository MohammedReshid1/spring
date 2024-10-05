'use client'

import React, { useState, useEffect } from 'react'

const NumberTicker = ({ initialValue, targetValue, duration, suffix = '', start }) => {
  const [currentValue, setCurrentValue] = useState(initialValue)

  useEffect(() => {
    if (!start) return

    const startTime = Date.now()
    const endTime = startTime + duration

    const updateValue = () => {
      const now = Date.now()
      const progress = Math.min(1, (now - startTime) / duration)
      const newValue = Math.floor(initialValue + progress * (targetValue - initialValue))
      setCurrentValue(newValue)

      if (now < endTime) {
        requestAnimationFrame(updateValue)
      } else {
        setCurrentValue(targetValue)
      }
    }

    requestAnimationFrame(updateValue)
  }, [initialValue, targetValue, duration, start])

  return <span>{currentValue}{suffix}</span>
}

export default NumberTicker