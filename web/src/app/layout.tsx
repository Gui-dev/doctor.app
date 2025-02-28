import type { Metadata } from 'next'
import { Source_Sans_3 } from 'next/font/google'
import './globals.css'

const source = Source_Sans_3({
  variable: '--font-source-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Doctor app',
  description: 'Book your appointment with our doctors',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${source.variable} bg-gray-950 text-gray-50 antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
