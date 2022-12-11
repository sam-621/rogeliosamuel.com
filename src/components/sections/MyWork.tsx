import { useFilterProjects } from '@hooks'

import { MyWorkTabs } from '../molecules/MyWorkTabs'
import { SectionHeader } from '../molecules/SectionHeader'
import { ProjectCard } from '../organisms/ProjectCard'

const PRIVATE_DESCRIPTION = 'The most relevant projects in which I have participated'
const PUBLIC_DESCRIPTION = 'The most relevant projects i have made by  myself'

export const MyWork = () => {
  const { projects, isPrivate, setIsPrivate } = useFilterProjects()

  return (
    <section className="flex flex-col gap-12 justify-center">
      <div className="flex flex-col gap-8">
        <SectionHeader
          title="My Work"
          subtitle={isPrivate ? PRIVATE_DESCRIPTION : PUBLIC_DESCRIPTION}
        />
        <MyWorkTabs isPrivate={isPrivate} setIsPrivate={setIsPrivate} />
      </div>
      <div className="flex flex-col gap-8 lg:grid xl:gap-16 grid-cols-2 max-w-7xl m-auto">
        {projects.map(project => (
          <ProjectCard project={project} />
        ))}
      </div>
    </section>
  )
}
