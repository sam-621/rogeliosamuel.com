import { Header, Hero } from '@sections'

export const Home = () => {
  return (
    <>
      <Header />
      <main className="mx-4 mt-12 md:mx-16 lg:mx-28">
        <Hero />
      </main>
    </>
  )
}

export default Home
