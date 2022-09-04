import Image from 'next/image'
import { FC } from 'react'

export const ProfileImage: FC = () => {
  return (
    <Image
      src="/img/Samuel.jpg"
      alt="Rogelio Samuel"
      width={100}
      height={100}
      className="rounded-full"
    />
  )
}
