import { FC, ReactNode } from 'react'
import Link from 'next/link'

export const Button: FC<Props> = ({ children, href }) => {
  if (href) {
    return (
      <Link href={href}>
        <a
          href=""
          target="_blank"
          rel="noreferrer"
          className="text-simple-title bg-primary rounded-lg p-3 text-xs"
        >
          {children}
        </a>
      </Link>
    )
  }

  return <button type="button">{children}</button>
}

type Props = {
  href?: string
  children: ReactNode
}
