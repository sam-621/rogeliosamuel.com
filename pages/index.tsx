import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/containers/Footer'
import Header from '../components/containers/Header'
import ProjectSection from '../components/containers/ProjectsSection'
import Title from '../components/molecules/Title'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rogelio Samuel | Home</title>
        <meta
          name="description"
          content="Rogelio Samuel website. Here you can find my projects, experience level, and more details about me."
        />
      </Head>
      <Header />
      <Title title="Projects" />
      <ProjectSection />
      <Footer />
    </>
  )
}

export default Home
