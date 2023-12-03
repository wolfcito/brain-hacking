import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useEffect, useState } from 'react'
import { useConnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

export default function Header() {
  const [hideConnectBtn, setHideConnectBtn] = useState(false)
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })

  useEffect(() => {
    if (window.ethereum && window.ethereum.isMiniPay) {
      setHideConnectBtn(true)
      connect()
    }
  }, [])

  return (
    <Disclosure as="nav" className="bg-prosperity border-b border-gray-300">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-black focus:rounded-none focus:outline-none focus:ring-1 focus:ring-inset focus:ring-black">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  BRAIN HACKING
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {!hideConnectBtn && (
                  <ConnectButton
                    showBalance={{
                      smallScreen: true,
                      largeScreen: false,
                    }}
                    label='Wallet'
                  />
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  )
}

declare global {
  interface Window {
    ethereum: any
  }
}
