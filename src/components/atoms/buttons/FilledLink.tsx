import Link from 'next/link'
import { FC } from 'react'

export const FilledLink: FC<Props> = ({ variant, text }) => {
  switch (variant) {
    case 'primary':
      return (
        <Link href="/">
          <a className="bg-primary text-white px-10 py-2 rounded">{text}</a>
        </Link>
      )
    case 'secondary':
      return (
        <Link href="/" className="bg-cards text-white rounded p-2">
          {text}
        </Link>
      )

    default:
      return (
        <Link href="/" className="bg-primary text-white px-5 py-2 rounded">
          {text}
        </Link>
      )
  }
}

type Props = {
  variant: 'primary' | 'secondary'
  text: string
}
