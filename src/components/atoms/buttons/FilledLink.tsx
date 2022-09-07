import { TVariants } from 'interfaces/utils.interface'
import { FC } from 'react'

export const FilledLink: FC<Props> = ({ variant, text, url, className }) => {
  switch (variant) {
    case 'primary':
      return (
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className={`bg-primary text-white px-10 py-2 rounded ${className}`}
        >
          {text}
        </a>
      )
    case 'secondary':
      return (
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className={`bg-cards text-white rounded px-5 py-2 border border-cards ${className}`}
        >
          {text}
        </a>
      )

    default:
      return (
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className={`bg-primary text-white px-10 py-2 rounded ${className}`}
        >
          {text}
        </a>
      )
  }
}

type Props = {
  variant: TVariants
  text: string
  url: string
  className?: string
}
