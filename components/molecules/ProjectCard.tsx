import Image from 'next/image'
import { FC } from 'react'
import { TProject } from '../../interfaces/project.interface'

const ProjectCard: FC<Props> = ({ project }) => {
  return (
    <article className='shadow rounded-lg bg-card-background mx-2.5 sm:mx-16 md:mx-0 pb-2'>
      <div className=''>
        <Image
          className='rounded-tr-lg rounded-tl-lg object-cover transition-all'
          src={project.image}
          alt={project.name}
          width='300'
          height='170'
          layout='responsive'
          placeholder='blur'
          blurDataURL={project.image}
        />
      </div>
      <div className='rounded-br-lg rounded-bl-lg p-2.5'>
        <h3 className='text-white text-lg'>{project.name}</h3>
        <p className='text-subtitle text-sm'>{project.shortDescription}</p>
        <div className='mt-5 flex justify-around'>
          <a
            className='bg-secondary text-white p-2 rounded-md flex'
            href={project.demo}
            target='_blank'
            rel='noreferrer'
          >
            View demo
            <img className='ml-1' src='/icons/view_demo.svg' alt='view demo' />
          </a>
          <a
            href={project.repo}
            className='flex bg-black text-white rounded-md p-2'
            target='_blank'
            rel='noreferrer'
          >
            View code <img src='/icons/view_repo.svg' alt='view repo' />
          </a>
        </div>
      </div>
    </article>
  )
}

type Props = {
  project: TProject
}

export default ProjectCard
