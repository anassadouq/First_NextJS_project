import './globals.css'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

import { Montserrat } from 'next/font/google'
const bodyFont = Montserrat({ 
  subsets: ['latin'],
  weight: ['400'],
})

export const metadata = {
  title: 'HEXASHOP',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bodyFont.className}>
        <div className='container'>
          <Navbar/>
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  )
}