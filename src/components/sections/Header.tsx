import { Button } from '../atoms/Button'
import { Logo } from '../atoms/Logo'
import { Nav } from '../molecules/Nav'

export const Header = () => {
  return (
    <header className="flex justify-between items-center pt-4 px-4 md:px-16 lg:px-28 lg:pt-10 nav-height">
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
