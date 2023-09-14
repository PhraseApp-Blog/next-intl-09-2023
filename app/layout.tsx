import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './_components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dirkha - Good Green News',
  description: 'Created using Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
