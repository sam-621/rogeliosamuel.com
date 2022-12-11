import { Button } from '../atoms/Button'
import { Logo } from '../atoms/Logo'
import { Nav } from '../molecules/Nav'

export const Header = () => {
  return (
    <header className="flex justify-between items-center mt-4 mx-4">
      <Logo />
      <Nav />
      <hr className="hidden" />
      <div className="hidden">
        <Button href="/CV.pdf">Download CV</Button>
      </div>
    </header>
  )
}
