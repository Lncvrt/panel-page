import type { Metadata } from 'next'
import { Lexend } from 'next/font/google'
import './globals.css'

const lexend = Lexend({
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Select a panel!'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel="icon" type="image/png" href="https://cdn.lncvrt.xyz/pfp-round.png" />
      </head>
      <body className={lexend.className}>{children}</body>
    </html>
  )
}
