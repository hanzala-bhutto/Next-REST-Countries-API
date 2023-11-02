'use client';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Flowbite } from 'flowbite-react';

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Rest Countries Api',
//   description: 'Generated by Hanzala',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="en">
      <Flowbite>
        <body className={inter.className}>{children}</body>
      </Flowbite>
    </html>
  )
}
