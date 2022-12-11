import { FC, ReactNode } from 'react'

export const Title: FC<Props> = ({ variant, className, children }) => {
  if (variant === 'h1') {
    return (
      <h1
        className={`text-5xl font-bold text-fill-transparent bg-gradient-to-r from-gray-100 via-[rgba(244,247,251,62%)] to-gray-100 bg-clip-text lg:text-6xl ${className}`}
      >
        {children}
      </h1>
    )
  }

  return (
    <h2
      className={`text-5xl font-bold text-fill-transparent bg-gradient-to-r from-gray-100 via-[rgba(244,247,251,62%)] to-gray-100 bg-clip-text ${className}`}
    >
      {children}
    </h2>
  )
}

type Props = {
  children: ReactNode
  variant?: 'h1' | 'h2'
  className?: string
}
