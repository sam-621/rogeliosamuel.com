import { FC, ReactNode } from 'react'

export const Subtitle: FC<Props> = ({ children, className }) => {
  return <p className={`${className} text-lg text-subtitle lg:text-2xl`}>{children}</p>
}

type Props = {
  children: ReactNode
  className?: string
}
