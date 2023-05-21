'use client' // Error components must be Client Components

import type { FC } from 'react'
import { useEffect } from 'react'

interface ErrorProps {
  error: Error
  reset: () => void
}

const Error: FC<ErrorProps> = ({ error, reset }): JSX.Element => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}

export default Error

// Path: app/about/error.tsx
// Created at: 19:13:14 - 21/05/2023
// Language: Typescript
// Framework: React/Next.js
