import { FC, ReactNode } from 'react'

export const FeaturedText: FC<Props> = ({ children }) => {
  return (
    <div className="featured-text">
      <span>{children}</span>
      <hr className="opacity-0 mx-1 border rounded-full transition-all bg-links" />
    </div>
  )
}

type Props = {
  children: ReactNode
}
