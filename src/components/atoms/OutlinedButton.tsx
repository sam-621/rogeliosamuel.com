import { FC, ReactNode } from 'react'

export const OutlinedButton: FC<Props> = ({ children, href }) => {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="border border-[rgba(244, 247, 251, 0.6)] rounded-lg py-3 text-center text-subtitle"
      >
        {children}
      </a>
    )
  }

  return <button type="button">{children}</button>
}

type Props = {
  href?: string
  children: ReactNode
}
