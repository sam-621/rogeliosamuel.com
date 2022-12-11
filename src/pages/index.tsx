import { Header, Hero, MyWork } from '@sections'

export const Home = () => {
  return (
    <>
      <Header />
      <main className="mx-4 md:mx-16 lg:mx-28 flex flex-col gap-20">
        <Hero />
        <MyWork />
      </main>
    </>
  )
}

export default Home
