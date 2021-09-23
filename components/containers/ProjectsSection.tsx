import projects from '../../data/projects'
import ProjectCard from '../molecules/ProjectCard'

const ProjectSection = () => {
  return (
    <section className="grid gap-y-7 justify-center md:grid-cols-2 md:gap-x-10 md:mx-16 lg:mx-32">
      {projects.map((item) => (
        <ProjectCard key={item.id} project={item} />
      ))}
    </section>
  )
}

export default ProjectSection
