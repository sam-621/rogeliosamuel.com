import { Blogs } from '@sections/Blog'
import { Header } from '@sections/Header'
import { Projects } from '@sections/Projects'

export const Home = () => {
  return (
    <div className="mx-2 mt-5">
      <Header />
      <Projects />
      <Blogs />
    </div>
  )
}

export default Home
