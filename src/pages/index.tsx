import { desktop } from '@helpers/media-queries'
import { useMedia } from '@hooks/useMedia'
import { Blogs } from '@sections/Blogs'
import { HeaderDesktop } from '@sections/desktop/HeaderDesktop'
import { Nav } from '@sections/desktop/Nav'
import { ProjectsDesktop } from '@sections/desktop/ProjectsDesktop'
import { Footer } from '@sections/Footer'
import { Header } from '@sections/Header'
import { Projects } from '@sections/Projects'

export const Home = () => {
  const { matches: isDesktop } = useMedia(desktop)

  return (
    <div className="mx-5 mt-5 md:mx-10 lg:mx-20 xl:mx-52">
      {isDesktop ? (
        <>
          <div className="h-screen">
            <Nav />
            <HeaderDesktop />
          </div>
          <ProjectsDesktop />
        </>
      ) : (
        <>
          <Header />
          <Projects />
          <Blogs />
          <Footer />
        </>
      )}
    </div>
  )
}

export default Home
