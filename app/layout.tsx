// app/layout.tsx

import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import { ShellLayout } from '@/components/layouts/shell-layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PulseOS',
  description: 'The OS for modern, AI-empowered, secure global teams.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <ShellLayout>
          {children}
        </ShellLayout>
      </body>
    </html>
  )
}
