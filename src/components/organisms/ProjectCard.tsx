import { FC } from 'react'
import Image from 'next/image'

import { WorksFilers } from '@hooks'
import { Project } from '@interfaces'

import { OutlinedButton } from '../atoms/OutlinedButton'

export const ProjectCard: FC<Props> = ({ project }) => {
  const isPublicProject = project.filter === WorksFilers.PUBLIC_PROJECTS

  return (
    <a
      href={project.link.live}
      target="_blank"
      className="project-card-container pointer-events-none lg:pointer-events-auto border border-stroke-cards lg:border-transparent hover:border-stroke-cards rounded-3xl p-4 bg-project-card transition-all"
      rel="noreferrer"
    >
      <article className="flex flex-col gap-8">
        <div>
          <div className="rounded-2xl" style={{ background: project.backgroundColor }}>
            <Image
              src={`/img/projects/${project.picture}`}
              placeholder="blur"
              blurDataURL={`/img/projects/${project.picture}`}
              layout="responsive"
              width={261}
              height={122}
              className="rounded-2xl object-cover"
              alt={project.title}
            />
          </div>
        </div>
        <div className={`flex flex-col ${isPublicProject ? 'gap-2' : 'gap-4'} `}>
          <h3 className="text-3xl text-simple-title font-semibold">{project.title}</h3>
          {isPublicProject ? (
            <a
              href={project.link.repo}
              target="_blank"
              className="pointer-events-auto bg-project-card w-fit border border-stroke-cards p-2 lg:border-transparent lg:pl-0 rounded-lg transition-all"
              rel="noreferrer"
            >
              <div className="flex justify-start items-center gap-2">
                <Image src={`/icons/companies/${project.company}`} width={27} height={27} />
                <span className="text-white text-sm">
                  sam-621/{project.title.replaceAll(' ', '-')}
                </span>
              </div>
            </a>
          ) : (
            <div className="flex justify-start items-center gap-2">
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
          {project.filter === WorksFilers.BLOGS ? 'Read online' : 'Project in live'}
        </OutlinedButton>
      </article>
    </a>
  )
}

type Props = {
  project: Project
}
