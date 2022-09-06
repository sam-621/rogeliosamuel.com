import { Blogs } from '@sections/Blogs'
import { Footer } from '@sections/Footer'
import { Header } from '@sections/Header'
import { Projects } from '@sections/Projects'

export const Home = () => {
  return (
    <div className="mx-2 mt-5">
      <Header />
      <Projects />
      <Blogs />
      <Footer />
    </div>
  )
}

export default Home
