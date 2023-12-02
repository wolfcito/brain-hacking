import { useEffect, useState } from 'react'
import { useAccount } from 'wagmi'

export default function Home() {
  const [userAddress, setUserAddress] = useState('')
  const { address, isConnected } = useAccount()

  useEffect(() => {
    if (isConnected && address) {
      setUserAddress(address)
    }
  }, [address, isConnected])

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="h1">Mente sana 💘 Cerebro sano!</div>
      {isConnected && (
        <>
          <div className="h2 text-center">Bienvenido: {userAddress}</div>
          <div> Nuestro curso aquí</div>
        </>
      )}
    </div>
  )
}
