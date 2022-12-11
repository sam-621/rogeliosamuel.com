import { FC, ReactNode } from 'react'

export const Title: FC<Props> = ({ variant, className, children }) => {
  if (variant === 'h2') {
    return (
      <h2 className={`text-5xl font-bold text-fill-transparent text-bg ${className}`}>
        {children}
      </h2>
    )
  }

  return (
    <h1 className={`text-5xl font-bold text-fill-transparent text-bg ${className}`}>{children}</h1>
  )
}

type Props = {
  children: ReactNode
  variant?: 'h1' | 'h2'
  className?: string
}
