import { FC } from 'react'
import Image from 'next/image'

import { Project } from '@interfaces'

import { OutlinedButton } from '../atoms/OutlinedButton'

export const ProjectCard: FC<Props> = ({ project }) => {
  return (
    <a
      href={project.link.live}
      className="pointer-events-none lg:pointer-events-auto border border-stroke-cards lg:border-transparent hover:border-stroke-cards rounded-3xl p-4 bg-project-card transition-all z-0"
    >
      <article className="flex flex-col gap-8">
        <div>
          <div className="p-6 rounded-2xl" style={{ background: project.backgroundColor }}>
            <Image
              src={`/img/projects/${project.picture}`}
              layout="responsive"
              width={261}
              height={122}
              className="rounded-2xl object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-3xl text-simple-title font-semibold">{project.title}</h3>
          {project.company && (
            <div className="flex justify-start">
              <Image src={`/icons/companies/${project.company}`} width={80} height={27} />
            </div>
          )}
          <p className="text-lg text-subtitle">{project.description}</p>
        </div>
        <OutlinedButton
          className="lg:hidden pointer-events-auto"
          onClick={() => {
            window.location.href = project.link.live
          }}
        >
          Project in live
        </OutlinedButton>
      </article>
    </a>
  )
}

type Props = {
  project: Project
}
