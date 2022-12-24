import { MY_WORK_COPIES } from '@data'
import { useFilterProjects } from '@hooks'

import { MyWorkTabs } from '../molecules/MyWorkTabs'
import { SectionHeader } from '../molecules/SectionHeader'
import { ProjectCard } from '../organisms/ProjectCard'

export const MyWork = () => {
  const { projects, filter, setFilter } = useFilterProjects()

  return (
    <>
      <div id="my-work" />
      <section className="flex flex-col gap-12 justify-center">
        <div className="flex flex-col gap-8">
          <SectionHeader title="My Work" subtitle={MY_WORK_COPIES[filter]} />
          <MyWorkTabs filter={filter} setFilter={setFilter} />
        </div>
        <div className="flex flex-col gap-8 lg:grid xl:gap-16 grid-cols-2 max-w-7xl m-auto">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </>
  )
}
