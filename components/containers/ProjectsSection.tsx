import projects from '../../data/projects'
import ProjectCard from '../molecules/ProjectCard'

const ProjectSection = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-y-7">
      {projects.map((item) => (
        <ProjectCard key={item.id} project={item} />
      ))}
    </section>
  )
}

export default ProjectSection
