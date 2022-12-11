import { FC, ReactNode } from 'react'

export const Subtitle: FC<Props> = ({ children, className }) => {
  return <p className={`text-lg text-subtitle ${className}`}>{children}</p>
}

type Props = {
  children: ReactNode
  className?: string
}
