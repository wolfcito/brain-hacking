import { ROUTES } from '@/constants/routes'
import { useRouter } from 'next/router'
import Image from 'next/image'
import asset10 from '@/public/assets/img/bh010-goal.jpg'

export default function Score() {
  const router = useRouter()

  return (
    <main className="my-10 flex items-center justify-center">
      <div className="flex flex-col rounded-lg bg-white dark:bg-neutral-700 md:max-w-xl md:flex-row">
        {/* <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src="assets/img/bh010-goal.jpg"
          alt=""
        /> */}
        <Image
          src={asset10}
          alt={'Logo alcanzado'}
          width={500}
          height={500}
          className="h-[400px] w-[400px] rounded-3xl object-cover"
        />

        <div className="flex flex-col justify-start p-6">
          <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
            Felicidades 🥳🥳🥳🥳!!!
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            Se culmino el primer nivel de React 🤘. No pares de aprender.
          </p>
          <p className="text-xs text-neutral-500 dark:text-neutral-300">
            Last updated 3 mins ago
          </p>
          <div>
            <button
              type="button"
              className="bg-primary (leading-normal hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              onClick={() => router.push(ROUTES.RECORD.INDEX)}
            >
              Próximo Reto 💪
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
