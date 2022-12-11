import { Header, Hero } from '@sections'

export const Home = () => {
  return (
    <>
      <Header />
      <main className="mx-4 md:mx-16 lg:mx-28">
        <Hero />
      </main>
    </>
  )
}

export default Home
