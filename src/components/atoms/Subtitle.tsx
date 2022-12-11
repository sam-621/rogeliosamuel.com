import { FC, ReactNode } from 'react'

export const Subtitle: FC<Props> = ({ children }) => {
  return <p className="text-lg text-subtitle">{children}</p>
}

type Props = {
  children: ReactNode
}
