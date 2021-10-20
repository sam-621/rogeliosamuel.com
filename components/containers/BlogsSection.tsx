import { blogs } from '../../data/blogs'
import BlogCard from '../molecules/BlogCard'

const BlogsSection = () => {
  return (
    <section className='grid gap-y-7 justify-center md:grid-cols-2 md:gap-x-10 md:mx-16 lg:mx-32'>
      {blogs.map((item) => (
        <BlogCard key={item.id} blog={item} />
      ))}
    </section>
  )
}

export default BlogsSection
