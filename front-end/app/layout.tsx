import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ThemeProvider from '@/components/layout/ThemeProvider'
import Header from '@/components/layout/Header'
import Sidebar from '@/components/layout/Sidebar'
import { Toaster } from 'react-hot-toast'

import { ClerkProvider } from '@clerk/nextjs'
import Providers from './provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MultiMed Vision+',
  description: 'Next generational multimodal medical vision app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang='en' suppressHydrationWarning>
        <body className={inter.className}>
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
            <Header />
            <div className='flex h-screen overflow-scroll'>
              <Sidebar />
              <main className='grow pt-16'>
                <Providers>{children}</Providers>
                <Toaster />
              </main>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
