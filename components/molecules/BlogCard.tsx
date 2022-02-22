import Image from 'next/image'
import { FC } from 'react'
import { TBlog } from '../../data/blogs'

const BlogCard: FC<Props> = ({ blog }) => {
  return (
    <article className='shadow rounded-lg bg-card-background mx-2.5 sm:mx-16 md:mx-0 pb-2'>
      <div className=''>
        <Image
          className='rounded-tr-lg rounded-tl-lg object-cover transition-all'
          src={blog.image}
          alt={blog.title}
          width='300'
          height='170'
          layout='responsive'
          placeholder='blur'
          blurDataURL={blog.image}
        />
      </div>
      <div className='rounded-br-lg rounded-bl-lg p-2.5'>
        <h3 className='text-white text-lg'>{blog.title}</h3>
        <p className='text-subtitle text-sm'>{blog.shortDescription}</p>
        <div className='mt-5 flex justify-around'>
          <a
            className='bg-secondary text-white p-2 px-5 rounded-md flex'
            href={blog.demo}
            target='_blank'
            rel='noreferrer'
          >
            Read
            <img className='ml-1' src='/icons/view_demo.svg' alt='view demo' />
          </a>
        </div>
      </div>
    </article>
  )
}

type Props = {
  blog: TBlog
}

export default BlogCard
