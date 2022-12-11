import { Dispatch, FC, SetStateAction } from 'react'

export const MyWorkTabs: FC<Props> = ({ setIsPrivate, isPrivate }) => {
  return (
    <div className="flex justify-center gap-16">
      <div>
        <button
          type="button"
          className="text-subtitle text-lg lg:text-2xl toggle-btn outline-none"
          onClick={() => setIsPrivate(true)}
        >
          Private
        </button>
        <hr className={`border-none h-[2px] rounded-full mx-1 ${isPrivate && 'bg-links'}`} />
      </div>
      <div>
        <button
          type="button"
          className="text-subtitle text-lg lg:text-2xl toggle-btn outline-none"
          onClick={() => setIsPrivate(false)}
        >
          Public
        </button>
        <hr className={`border-none h-[2px] rounded-full mx-1 ${!isPrivate && 'bg-links'}`} />
      </div>
    </div>
  )
}

type Props = {
  isPrivate: boolean
  setIsPrivate: Dispatch<SetStateAction<boolean>>
}
