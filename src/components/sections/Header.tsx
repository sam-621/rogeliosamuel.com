import { Button } from '../atoms/Button'
import { Logo } from '../atoms/Logo'
import { Nav } from '../molecules/Nav'

export const Header = () => {
  return (
    <header className="flex justify-between items-center mt-4 mx-4 md:mx-16 lg:mx-28 lg:mt-10">
      <Logo />
      <div className="flex gap-10 items-center">
        <Nav />
        <hr className="hidden lg:block bg-[#9BC3FF] opacity-50 w-[1px] h-9 border-none rounded-full" />
        <div className="hidden lg:flex items-center">
          <Button href="/CV.pdf">Download CV</Button>
        </div>
      </div>
    </header>
  )
}
