import { FC } from 'react'

export const Title: FC<Props> = ({ variant, text }) => {
  switch (variant) {
    case 'h1':
      return <h1 className="text-title font-semibold text-2xl">{text}</h1>
    case 'h2':
      return <h2 className="text-title font-semibold text-xl">{text}</h2>
    case 'h3':
      return <h3 className="text-title font-semibold text-base">{text}</h3>
    default:
      return <h1 className="text-title font-semibold text-2xl">{text}</h1>
  }
}

type Props = {
  variant: 'h1' | 'h2' | 'h3'
  text: string
}
