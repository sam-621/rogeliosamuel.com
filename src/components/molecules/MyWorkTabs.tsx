import { Dispatch, FC, SetStateAction } from 'react'

import { WorksFilers } from '@hooks'

import { MyWorkTab } from '../atoms/MyWorkTab'

export const MyWorkTabs: FC<Props> = ({ filter, setFilter }) => {
  const isPrivateProject = filter === WorksFilers.PRIVATES_PROJECTS
  const isPublicProject = filter === WorksFilers.PUBLIC_PROJECTS
  const isBlog = filter === WorksFilers.BLOGS
  return (
    <div className="flex justify-center gap-3 md:gap-6 lg:gap-12">
      <MyWorkTab
        isActive={isPrivateProject}
        onClick={() => setFilter(WorksFilers.PRIVATES_PROJECTS)}
      >
        Private
      </MyWorkTab>
      <MyWorkTab isActive={isPublicProject} onClick={() => setFilter(WorksFilers.PUBLIC_PROJECTS)}>
        Public
      </MyWorkTab>
      <MyWorkTab isActive={isBlog} onClick={() => setFilter(WorksFilers.BLOGS)}>
        Blog
      </MyWorkTab>
    </div>
  )
}

type Props = {
  setFilter: Dispatch<SetStateAction<WorksFilers>>
  filter: WorksFilers
}
