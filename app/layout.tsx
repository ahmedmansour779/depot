import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from './design-system/components/Footer'
import Header from './design-system/components/Header'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Depot',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./icon.png" />
        <meta name="author" content="Ahmed Mansour" />
      </head>
      <body className={inter.className}>
        <Header />
        <hr />
        {children}
        <Footer />
      </body>
    </html>
  )
}
