import type { Metadata } from 'next'
import { Roboto, Source_Sans_3 } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  style: 'normal',
  weight: ['400', '500', '700'],
})

const source = Source_Sans_3({
  variable: '--font-source-sans',
  subsets: ['latin'],
  style: 'normal',
  weight: ['400', '500', '700'],
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
        className={`${roboto.variable} ${source.variable} bg-gray-700 text-gray-50 antialiased`}
      >
        <div className="m-auto mt-4 w-full max-w-[382px] rounded-3xl bg-gray-950 px-6 py-6 shadow-md">
          {children}
        </div>
      </body>
    </html>
  )
}
