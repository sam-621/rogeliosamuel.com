import { TVariants } from 'interfaces/utils.interface'
import Link from 'next/link'
import { FC } from 'react'

export const FilledLink: FC<Props> = ({ variant, text, className }) => {
  switch (variant) {
    case 'primary':
      return (
        <Link href="/">
          <a className={`bg-primary text-white px-10 py-2 rounded ${className}`}>{text}</a>
        </Link>
      )
    case 'secondary':
      return (
        <Link href="/" className="">
          <a className={`bg-cards text-white rounded px-5 py-2 border border-cards ${className}`}>
            {text}
          </a>
        </Link>
      )

    case 'secondary-2':
      return (
        <Link href="/" className="">
          <a
            className={`bg-black text-white rounded md:px-5 py-2 border border-viewport ${className}`}
          >
            {text}
          </a>
        </Link>
      )

    default:
      return (
        <Link href="/">
          <a className={`bg-primary text-white px-10 py-2 rounded ${className}`}>{text}</a>
        </Link>
      )
  }
}

type Props = {
  variant: TVariants
  text: string
  className?: string
}
