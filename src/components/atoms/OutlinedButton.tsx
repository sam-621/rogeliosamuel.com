import { FC, ReactNode } from 'react'

export const OutlinedButton: FC<Props> = ({ children, href, className, onClick }) => {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={`border border-[rgba(244, 247, 251, 0.6)] rounded-lg py-3 text-center text-subtitle ${className}`}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type="button"
      className={`border border-[rgba(244, 247, 251, 0.6)] rounded-lg py-3 text-center text-subtitle ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

type Props = {
  href?: string
  className?: string
  children: ReactNode
  onClick?: () => void
}
