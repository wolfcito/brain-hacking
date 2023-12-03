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
        {children}
      <Footer />
    </div>
  )
}

export default Layout
