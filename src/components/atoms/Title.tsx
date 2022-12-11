import { FC, ReactNode } from 'react'

export const Title: FC<Props> = ({ variant, children }) => {
  if (variant === 'h1') {
    return (
      <h1 className="text-fill-transparent bg-gradient-to-r from-gray-100 via-[rgba(244,247,251,62%)] to-gray-100 bg-clip-text">
        {children}
      </h1>
    )
  }

  return (
    <h2 className="text-fill-transparent bg-gradient-to-r from-gray-100 via-[rgba(244,247,251,62%)] to-gray-100 bg-clip-text">
      {children}
    </h2>
  )
}

type Props = {
  variant?: 'h1' | 'h2'
  children: ReactNode
}
