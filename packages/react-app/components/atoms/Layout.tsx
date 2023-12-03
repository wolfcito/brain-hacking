import { FC, ReactNode, useEffect } from 'react'
import Footer from './Footer'
import Header from './Header'
import { useAccount } from 'wagmi'
import { PUBLIC_ROUTES, ROUTES } from '@/constants/routes'
import { useRouter } from 'next/router'

interface Props {
  children: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  const { isConnected } = useAccount()
  const router = useRouter()

  useEffect(() => {
    const pathname = window.location.pathname

    const indexRouteFound = PUBLIC_ROUTES.indexOf(pathname)

    if(indexRouteFound !== -1 && !isConnected)
      router.push(ROUTES.HOME)
     
  }, [])

  return (
    <div className="bg-gypsum flex min-h-screen flex-col overflow-hidden">
      <Header />
        {children}
      <Footer />
    </div>
  )
}

export default Layout
