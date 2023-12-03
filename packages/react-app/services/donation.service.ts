import { Contract, ethers, utils } from 'ethers'
import donationAbi from '@/scripts/donations.abi.json'
import { DONATION_ADDRESS } from '@/constants/wallet'

export const getDonorBalance = async (address: string) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const contract = new Contract(DONATION_ADDRESS, donationAbi, provider)

  const balance = await contract.donorBalances(address)
  return utils.formatEther(balance)
}

export const donateToContract = async (amount: number) => {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const contract = new Contract(DONATION_ADDRESS, donationAbi, provider)

    const signer = provider.getSigner()
    console.log('signer', signer)
    console.log('amount', amount)
    const contractWithSigner = contract.connect(signer)

    const transaction = await contractWithSigner.donate({
      value: utils.parseEther(amount.toString()),
    })

    await transaction.wait()

    console.log('Donation successful!')
  } catch (e) {
    console.log('error', e)
  }
}

export const withdrawFromContract = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const contract = new Contract(DONATION_ADDRESS, donationAbi, provider)

  const signer = provider.getSigner()
  const contractWithSigner = contract.connect(signer)

  const transaction = await contractWithSigner.withdraw()
  await transaction.wait()

  console.log('Withdrawal successful!')
}
