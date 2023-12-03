import { ChangeEvent, FormEvent, useState } from 'react'
import { IUseDonations } from './useDonations.interfaces'
import { Toast } from '@/components/atoms/Alerts/AlertSuccess'
import { donateToContract } from '@/services'

export default function useDonations(): IUseDonations {
  const [btnDotationWasClicked, setBtnDotationWasClicked] = useState(true)
  const [valueDonation, setValueDonation] = useState(0)

  const getDoneation = async () => {
    if (window.ethereum) {
      const allaccounts: string[] = await window.ethereum.request({
        method: 'eth_requestAccounts',
      })

      if (allaccounts.length) await donateToContract(valueDonation)
      Toast.fire({
        icon: 'success',
        title: '¡Gracias por ser parte del cambio!',
      })
    } else {
      console.error('MetaMask u otra billetera no detectada')
    }
    setValueDonation(0)
  }

  const handleClickBtnDonations = () => {
    setBtnDotationWasClicked(true)
  }

  const handleChangeValueDonation = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value)

    if (newValue > 0) setValueDonation(newValue)
  }

  const sendDonation = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    getDoneation()
  }

  return {
    btnDotationWasClicked,
    valueDonation,
    handleClickBtnDonations,
    handleChangeValueDonation,
    sendDonation,
  }
}
