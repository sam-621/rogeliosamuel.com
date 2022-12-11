import { SectionHeader } from '../molecules/SectionHeader'
import { ProjectCard } from '../organisms/ProjectCard'

export const MyWork = () => {
  return (
    <section>
      <SectionHeader
        title="My Work"
        subtitle="The most relevant projects in which I have participated"
      />
      <div>
        <ProjectCard />
      </div>
    </section>
  )
}
