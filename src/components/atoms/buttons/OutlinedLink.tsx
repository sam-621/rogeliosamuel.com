import Link from 'next/link'
import { FC } from 'react'

export const OutlinedLink: FC<Props> = ({ variant, text, className }) => {
  switch (variant) {
    case 'primary':
      return (
        <Link href="/">
          <a className={`bg-none text-white border border-white px-5 py-2 rounded-sm ${className}`}>
            {text}
          </a>
        </Link>
      )
    default:
      return (
        <Link href="/">
          <a className={`bg-none text-white border border-white px-5 py-2 rounded-sm ${className}`}>
            {text}
          </a>
        </Link>
      )
  }
}

type Props = {
  variant: 'primary'
  text: string
  className?: string
}
