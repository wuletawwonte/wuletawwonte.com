import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Wuletaw Wonte',
  description: 'Wuletaw Wonte is a full-stack developer based in Arba Minch, Ethiopia.',
  keywords: 'wuletaw,wonte,full-stack,developer,arba,minch,ethiopia',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
