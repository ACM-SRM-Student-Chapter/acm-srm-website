"use client";
import { mangoGrotesque, polySans } from '@/styles/fonts'
import '@/styles/globals.css'
import SmoothScroll from '@/components/ui/SmoothScroll'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${mangoGrotesque.variable} ${polySans.variable}`}>
      <head>
        <title>ACM SRM Student Chapter</title>
      </head>
      <body className="bg-white">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}