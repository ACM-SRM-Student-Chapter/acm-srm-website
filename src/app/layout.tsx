// src/app/layout.tsx
import { mangoGrotesque, polySans } from '@/styles/fonts'
import '@/styles/globals.css'  // Updated import path
import SmoothScroll from '@/components/ui/SmoothScroll' // Updated import path

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${mangoGrotesque.variable} ${polySans.variable}`}>
      <body className="bg-white">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}