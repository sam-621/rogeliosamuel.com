import { desktop } from '@helpers/media-queries'
import { useMedia } from '@hooks/useMedia'
import Image from 'next/image'
import { FC } from 'react'

export const ProfileImage: FC = () => {
  const { matches } = useMedia(desktop)
  const imgW = matches ? 450 : 100
  const imgH = matches ? 450 : 100
  return (
    <Image
      src="/img/Samuel.jpg"
      alt="Rogelio Samuel"
      width={imgW}
      height={imgH}
      className="rounded-full object-cover"
    />
  )
}
