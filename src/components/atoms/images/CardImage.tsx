import Image from 'next/image'
import { FC } from 'react'

export const CardImage: FC<Props> = ({ src, alt }) => {
  return <Image src={`/img/${src}`} alt={alt} width={100} height={100} className="rounded-full" />
}

type Props = {
  src: string
  alt: string
}
