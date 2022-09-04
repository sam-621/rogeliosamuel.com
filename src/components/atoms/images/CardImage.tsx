import Image from 'next/image'
import { FC } from 'react'

export const CardImage: FC<Props> = ({ src, alt }) => {
  return <Image src={`/img/${src}`} alt={alt} width={300} height={166.25} className="rounded" />
}

type Props = {
  src: string
  alt: string
}
