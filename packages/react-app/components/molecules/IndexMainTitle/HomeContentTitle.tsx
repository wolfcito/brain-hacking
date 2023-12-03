import ReactTitle from '@/components/atoms/ReactTitle/ReactTitle'
import Image from 'next/image'
import asset002 from '@/public/assets/img/bh002-home.jpg'

export default function HomeContentTitle() {
  return (
    <div className="flex flex-col items-center justify-center">
      <ReactTitle />
      <Image
        src={asset002}
        alt={'home'}
        width={400}
        height={600}
        className="rounded-3xl"
      />
    </div>
  )
}
