'use client'

import { useState } from 'react'

interface ProfileImageProps {
  className?: string
  fallbackSize?: 'sm' | 'lg'
}

export default function ProfileImage({ className, fallbackSize = 'sm' }: ProfileImageProps) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div className="w-full h-full flex items-center justify-center text-center p-8 text-green-700">
        <div>
          <div className={fallbackSize === 'lg' ? 'text-6xl mb-4' : 'text-5xl mb-3'}>👩‍⚕️</div>
          <p className={fallbackSize === 'lg' ? 'font-bold text-lg' : 'font-semibold'}>Rachael</p>
          <p className="text-sm text-gray-600 mt-1">RN · Finnish A&amp;E</p>
        </div>
      </div>
    )
  }

  return (
    <img
      src="/Untitled.jpg"
      alt="Rachael — Healthcare Finnish Instructor"
      className={className ?? 'w-full h-full object-cover'}
      onError={() => setError(true)}
    />
  )
}
