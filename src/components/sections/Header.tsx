import { Button } from '../atoms/Button'
import { Logo } from '../atoms/Logo'
import { Nav } from '../molecules/Nav'

export const Header = () => {
  return (
    <header>
      <Logo />
      <Nav />
      <hr />
      <Button href="/CV.pdf">Download CV</Button>
    </header>
  )
}
