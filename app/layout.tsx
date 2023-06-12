import './globals.scss'
import Header from './components/header'
import { Montserrat } from 'next/font/google'

const roboto = Montserrat({
  subsets: ['latin'],
  weight: '400',
})

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
      <body className={roboto.className}>
        <div className="top"></div>        
        <div className="container">
          <Header />
          <main>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
