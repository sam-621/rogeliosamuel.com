import { useMedia } from '@hooks/useMedia'
import { Blogs } from '@sections/Blogs'
import { Nav } from '@sections/desktop/Nav'
import { Footer } from '@sections/Footer'
import { Header } from '@sections/Header'
import { Projects } from '@sections/Projects'

export const Home = () => {
  const { matches: isDesktop } = useMedia(768)

  if (isDesktop) {
    return (
      <div className="mx-5 mt-5">
        <Nav />
      </div>
    )
  }

  return (
    <div className="mx-5 mt-5">
      <Header />
      <Projects />
      <Blogs />
      <Footer />
    </div>
  )
}

export default Home
