"use client";
import { mangoGrotesque, polySans } from '@/styles/fonts'
import '@/styles/globals.css'
import dynamic from 'next/dynamic'

const SmoothScroll = dynamic(() => import('@/components/ui/SmoothScroll'), {
  ssr: false
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${mangoGrotesque.variable} ${polySans.variable}`}>
      <body className="bg-white overflow-x-hidden">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}