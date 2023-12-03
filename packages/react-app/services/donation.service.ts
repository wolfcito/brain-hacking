import { Contract, providers } from 'ethers'
import donationAbi from '@/scripts/donations.abi.json'
import { useMemo } from 'react'

const donationAddress = '0x6490499a3D79cc39f69B6D06163d359eb6eaF2fA'
const providerURL = 'https://alfajores-forno.celo-testnet.org'

const provider = new providers.JsonRpcProvider(providerURL)

export const useDonationContract = () => {
  const active = true
  return useMemo(() => {
    if (active) return new Contract(donationAddress, donationAbi, provider)
  }, [active])
}
