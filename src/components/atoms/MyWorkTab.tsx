import { FC, ReactNode } from 'react'

export const MyWorkTab: FC<Props> = ({ isActive, children, onClick }) => {
  return (
    <div className="flex flex-col gap-1">
      <button
        type="button"
        className="text-subtitle text-lg lg:text-xl toggle-btn outline-none lg:hover:bg-[#333333] py-2 px-4 rounded-md transition-all"
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
