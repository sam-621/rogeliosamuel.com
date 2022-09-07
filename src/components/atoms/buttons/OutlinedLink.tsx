import { FC } from 'react'

export const OutlinedLink: FC<Props> = ({ variant, text, url, className }) => {
  switch (variant) {
    case 'primary':
      return (
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className={`bg-none text-white border border-white px-5 lg:px-10 py-2 rounded-sm ${className}`}
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
          className={`bg-none text-white border border-white px-5 lg:px-10 py-2 rounded-sm ${className}`}
        >
          {text}
        </a>
      )
  }
}

type Props = {
  variant: 'primary'
  text: string
  url: string
  className?: string
}
