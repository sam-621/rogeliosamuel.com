import Link from 'next/link'
import { FC } from 'react'

export const FilledLink: FC<Props> = ({ variant, text }) => {
  switch (variant) {
    case 'primary':
      return (
        <Link href="/" className="bg-primary text-white px-5 py-2 rounded-sm">
          {text}
        </Link>
      )
    case 'secondary':
      return (
        <Link href="/" className="bg-cards text-white rounded-sm p-2">
          {text}
        </Link>
      )

    default:
      return (
        <Link href="/" className="bg-primary text-white px-5 py-2 rounded-sm">
          {text}
        </Link>
      )
  }
}

type Props = {
  variant: 'primary' | 'secondary'
  text: string
}
