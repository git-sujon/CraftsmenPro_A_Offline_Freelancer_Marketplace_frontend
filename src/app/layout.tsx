import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CraftsmenPro - Where Online Meets Onsite',
  description: 'CraftsmenPro connects you with skilled professionals for a wide range of face-to-face services. From home repairs to maintenance tasks, we make your life easier. Book now!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
