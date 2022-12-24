import { AboutMe, Header, Hero, MyWork } from '@sections'

export const Home = () => {
  return (
    <>
      <Header />
      <main className="mx-4 flex flex-col gap-20 md:mx-8 lg:mx-28 lg:gap-32 mb-48">
        <Hero />
        <MyWork />
        <AboutMe />
      </main>
    </>
  )
}

export default Home
