import type { NextPage } from 'next'
import Header from '../components/containers/Header'
import Title from '../components/molecules/Title'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Title title="Projects" />
    </>
  )
}

export default Home
