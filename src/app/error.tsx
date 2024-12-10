'use client'
import { useEffect } from 'react'
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {

    console.error(error)
  }, [error])
 
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <h2 className="text-4xl font-title font-bold mb-4">Something went wrong!</h2>
      <p className="text-gray-600 mb-8">We apologize for the inconvenience.</p>
      <button
        onClick={reset}
        className="bg-black text-white font-title py-4 px-12 text-xl hover:bg-gray-900 transition-colors"
      >
        Try again
      </button>
    </div>
  )
}