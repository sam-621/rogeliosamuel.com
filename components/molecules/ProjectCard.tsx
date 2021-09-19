import Image from 'next/image'
import { FC } from 'react'
import { TProject } from '../../interfaces/project.interface'

const ProjectCard: FC<Props> = ({ project }) => {
  return (
    <article>
      <div>
        <Image src={project.image} alt={project.name} width="300" height="144" />
      </div>
      <div>
        <h3>{project.name}</h3>
        <p>{project.shortDescription}</p>
        <div>
          <a href={project.demo}>View demo</a>
          <a href={project.repo}>View code</a>
        </div>
      </div>
    </article>
  )
}

type Props = {
  project: TProject
}

export default ProjectCard
