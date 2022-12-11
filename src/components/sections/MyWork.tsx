import { projects } from '@data'

import { SectionHeader } from '../molecules/SectionHeader'
import { ProjectCard } from '../organisms/ProjectCard'

export const MyWork = () => {
  return (
    <section className="flex flex-col gap-12 justify-center">
      <div className="flex flex-col gap-8">
        <SectionHeader
          title="My Work"
          subtitle="The most relevant projects in which I have participated"
        />
        <div className="flex justify-center gap-16">
          <div>
            <button type="button" className="text-subtitle text-2xl toggle-btn">
              Private
            </button>
            <hr className="border-none h-[2px] rounded-full mx-1" />
          </div>
          <div>
            <button type="button" className="text-subtitle text-2xl toggle-btn">
              Public
            </button>
            <hr className="border-none h-[2px] rounded-full mx-1" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 lg:grid xl:gap-16 grid-cols-2 max-w-7xl m-auto">
        {projects.map(project => (
          <ProjectCard project={project} />
        ))}
      </div>
    </section>
  )
}
