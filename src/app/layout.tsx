import Footer from './components/footer/footer'
import Navbar from './components/navbar/navbar'
import './globals.css'

export const metadata = {
  title: 'Fandriana application',
  description: 'A website for work of art of Fandriana',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='fr'>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
