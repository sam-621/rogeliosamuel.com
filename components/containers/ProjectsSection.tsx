import projects from '../../data/projects'
import ProjectCard from '../molecules/ProjectCard'

const ProjectSection = () => {
  return (
    <section className="grid gap-y-7 justify-center items-center md:grid-cols-2 md:gap-x-5 md:mx-5 lg:mx-32">
      {projects.map((item) => (
        <ProjectCard key={item.id} project={item} />
      ))}
    </section>
  )
}

export default ProjectSection
