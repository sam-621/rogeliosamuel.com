import { FeaturedText } from '../atoms/FeaturedText'
import { NavItem } from '../atoms/NavItem'

export const Nav = () => {
  return (
    <nav className="flex gap-4 lg:gap-5">
      <NavItem href="#work">
        <FeaturedText>My Work</FeaturedText>
      </NavItem>
      <NavItem href="#about-me">
        <FeaturedText>About me</FeaturedText>
      </NavItem>
      <NavItem href="#experience">
        <FeaturedText>Experience</FeaturedText>
      </NavItem>
      <NavItem href="#lets-talk">
        <FeaturedText>Let&apos;s talk</FeaturedText>
      </NavItem>
    </nav>
  )
}
