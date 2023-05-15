import { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { NavBar } from './components/NavBar/NavBar';

//METADATA LAYOUT. Si en las páginas no hay título, aparecerá la palabra 'Acme'. En cambio, si hay título, aparecerá el título + | Acme ya que lo agrego como template para todas las páginas.
export const metadata: Metadata = {
  title: {
    default: 'Acme',
    template: '%s | Acme'
  },
};

const inter = Inter({subsets: ['latin']});

type RootLayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({children}: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>

        {/* Layout */}
        <NavBar/>

        {/* Application */}
        {children}

      </body>
    </html>
  )
};
