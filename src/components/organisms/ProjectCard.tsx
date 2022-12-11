import { FC } from 'react'
import Image from 'next/image'

import { Project } from '@interfaces'

import { OutlinedButton } from '../atoms/OutlinedButton'
import { Subtitle } from '../atoms/Subtitle'

export const ProjectCard: FC<Props> = ({ project }) => {
  return (
    <article className="border border-stroke-cards rounded-3xl p-4 flex flex-col gap-8 bg-project-card">
      <div>
        <div className="p-6 rounded-2xl" style={{ background: project.backgroundColor }}>
          <Image
            src={`/img/projects/${project.picture}`}
            layout="responsive"
            width={261}
            height={122}
            className="rounded-2xl"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl text-simple-title font-semibold">{project.title}</h3>
        <div className="flex justify-start">
          <Image src={`/icons/companies/${project.company}`} width={80} height={27} />
        </div>
        <Subtitle>{project.description}</Subtitle>
      </div>
      <OutlinedButton href={project.link.live}>Project in live</OutlinedButton>
    </article>
  )
}

type Props = {
  project: Project
}
