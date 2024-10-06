"use client"

import React, { useState, useEffect } from 'react'

export function TypingAnimation({ text, speed = 100 }) {
  const [displayText, setDisplayText] = useState('')
  const [isTypingComplete, setIsTypingComplete] = useState(false)

  useEffect(() => {
    let currentIndex = 0
    const intervalId = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1))
        currentIndex++
      } else {
        clearInterval(intervalId)
        setIsTypingComplete(true)
      }
    }, speed)

    return () => clearInterval(intervalId)
  }, [text, speed])

  return (
    <span className="font-medium">
      {displayText}
      {!isTypingComplete && <span className="animate-pulse">|</span>}
    </span>
  )
}