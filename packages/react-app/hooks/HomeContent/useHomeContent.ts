import { useEffect, useState } from "react"
import { useAccount } from "wagmi"
import { IUseHomeContent } from "./useHomeContent.interfaces"

export default function useHomeContent(): IUseHomeContent {
  const [userAddress, setUserAddress] = useState('')
  const { address, isConnected } = useAccount()

  useEffect(() => {
    if (isConnected && address) {
      setUserAddress(address)
    }
  }, [address, isConnected])

  return {
    userAddress,
    address,
    isConnected
  }
}