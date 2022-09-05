import { mediaFrom425 } from '@helpers/media-queries'
import { useMedia } from '@hooks/useMedia'
import Image from 'next/image'
import { FC } from 'react'

export const CardImage: FC<Props> = ({ src, alt }) => {
  const match = useMedia(mediaFrom425)
  console.log({
    match
  })

  return (
    <Image
      layout="responsive"
      src={`/img/${src}`}
      alt={alt}
      width={300}
      height={166.25}
      className="rounded"
      priority
    />
  )
}

type Props = {
  src: string
  alt: string
}
