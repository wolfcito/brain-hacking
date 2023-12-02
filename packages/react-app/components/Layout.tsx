import { FC, ReactNode } from 'react'
import Footer from './Footer'
import Header from './Header'

interface Props {
  children: ReactNode
}
const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="bg-gypsum flex min-h-screen flex-col overflow-hidden">
      <Header />
      <div className="mx-auto max-w-7xl space-y-8 py-16 sm:px-6 lg:px-8">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
