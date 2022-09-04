import Link from 'next/link'
import { FC } from 'react'

export const OutlinedLink: FC<Props> = ({ variant, text }) => {
  switch (variant) {
    case 'primary':
      return (
        <Link href="/" className="bg-none text-white border border-white px-5 py-2 rounded-sm">
          {text}
        </Link>
      )
    default:
      return (
        <Link href="/" className="bg-none text-white border border-white px-5 py-2 rounded-sm">
          {text}
        </Link>
      )
  }
}

type Props = {
  variant: 'primary'
  text: string
}
