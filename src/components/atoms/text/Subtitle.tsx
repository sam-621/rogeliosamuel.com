import { FC } from 'react'

export const Subtitle: FC<Props> = ({ variant, text, className }) => {
  switch (variant) {
    case 'span':
      return <span className={`text-subtitle text-base font-medium ${className}`}>{text}</span>
    case 'description':
      return <p className={`text-subtitle text-xs font-normal ${className}`}>{text}</p>
    default:
      return <span className={`text-subtitle text-base font-medium ${className}`}>{text}</span>
  }
}

type Props = {
  variant: 'span' | 'description'
  text: string
  className: string
}
