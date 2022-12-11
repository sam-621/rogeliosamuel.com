import { Dispatch, FC, SetStateAction } from 'react'

import { WorksFilers } from '@hooks'

export const MyWorkTabs: FC<Props> = ({ filter, setFilter }) => {
  const isPrivateProject = filter === WorksFilers.PRIVATES_PROJECTS
  const isPublicProject = filter === WorksFilers.PUBLIC_PROJECTS
  const isBlog = filter === WorksFilers.BLOGS
  return (
    <div className="flex justify-center gap-16">
      <div>
        <button
          type="button"
          className="text-subtitle text-lg lg:text-2xl toggle-btn outline-none"
          onClick={() => setFilter(WorksFilers.PRIVATES_PROJECTS)}
        >
          Private
        </button>
        <hr className={`border-none h-[2px] rounded-full mx-1 ${isPrivateProject && 'bg-links'}`} />
      </div>
      <div>
        <button
          type="button"
          className="text-subtitle text-lg lg:text-2xl toggle-btn outline-none"
          onClick={() => setFilter(WorksFilers.PUBLIC_PROJECTS)}
        >
          Public
        </button>
        <hr className={`border-none h-[2px] rounded-full mx-1 ${isPublicProject && 'bg-links'}`} />
      </div>
      <div>
        <button
          type="button"
          className="text-subtitle text-lg lg:text-2xl toggle-btn outline-none"
          onClick={() => setFilter(WorksFilers.BLOGS)}
        >
          Blogs
        </button>
        <hr className={`border-none h-[2px] rounded-full mx-1 ${isBlog && 'bg-links'}`} />
      </div>
    </div>
  )
}

type Props = {
  setFilter: Dispatch<SetStateAction<WorksFilers>>
  filter: WorksFilers
}
