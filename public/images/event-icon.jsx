import React from 'react'

export default function EventIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      className="mx-auto mb-4"
    >
      <rect x="40" y="40" width="120" height="120" rx="8" fill="#18BEBC" />
      <path
        d="M70 70H130M70 100H130M70 130H110"
        stroke="white"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="150" cy="150" r="30" fill="#111827" />
      <path
        d="M150 140V160M140 150H160"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}