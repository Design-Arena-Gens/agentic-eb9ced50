import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ওয়েবসাইট পাবলিশ করার গাইড',
  description: 'কিভাবে ওয়েবসাইট তৈরি করে পাবলিশ করবেন - সম্পূর্ণ বাংলা গাইড',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="bn">
      <body>{children}</body>
    </html>
  )
}
