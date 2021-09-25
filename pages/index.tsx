import type { NextPage } from 'next'
import Footer from '../components/containers/Footer'
import Header from '../components/containers/Header'
import ProjectSection from '../components/containers/ProjectsSection'
import Title from '../components/molecules/Title'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Title title="Projects" />
      <ProjectSection />
      <Footer />
    </>
  )
}

export default Home
