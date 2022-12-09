import { Logo } from '../atoms/Logo'
import { Nav } from '../molecules/Nav'

export const Header = () => {
  return (
    <header>
      <Logo />
      <Nav />
      <hr />
    </header>
  )
}
