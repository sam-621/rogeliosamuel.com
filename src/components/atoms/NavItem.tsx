import { FC, ReactNode } from 'react'
import Link from 'next/link'

export const NavItem: FC<Props> = ({ children, href }) => {
  return (
    <Link href={href}>
      <a href="" className="text-subtitle text-xs hover:text-links transition-all md:text-base">
        {children}
      </a>
    </Link>
  )
}

type Props = {
  href: string
  children: ReactNode
}
