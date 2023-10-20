import type { Metadata } from 'next'
import './globals.css'



export const metadata: Metadata = {
  title: 'NFTHub',
  description: 'Explore NFTs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-[#141943]'>{children}</body>
    </html>
  )
}
