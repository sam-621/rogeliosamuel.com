import { FC, ReactNode } from 'react'

export const MyWorkTab: FC<Props> = ({ isActive, children, onClick }) => {
  return (
    <div className="flex flex-col gap-1">
      <button
        type="button"
        className="text-subtitle text-lg lg:text-2xl toggle-btn outline-none"
        onClick={onClick}
      >
        {children}
      </button>
      <hr className={`border-none h-[2px] rounded-full mx-1 ${isActive && 'bg-links'}`} />
    </div>
  )
}

type Props = {
  onClick: () => void
  isActive: boolean
  children: ReactNode
}
