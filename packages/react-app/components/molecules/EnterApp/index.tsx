import { useRouter } from 'next/router'
import { useAccount } from 'wagmi'
import { ROUTES } from '@/constants/routes'

export default function EnterApp() {
  const { isConnected } = useAccount()
  const routre = useRouter()

  const handleClickEnterApp = () => routre.push(ROUTES.CODING.INDEX)

  return (
    <div className="flex flex-col content-center items-center justify-center">
      <button
        onClick={handleClickEnterApp}
        className={`my-2 w-1/6 basis-1/2 rounded-md ${
          isConnected ? 'bg-cyan-900' : 'bg-gray-500 hover:bg-gray-500'
        }`}
        disabled={!isConnected}
      >
        Ingresar
      </button>
    </div>
  )
}
