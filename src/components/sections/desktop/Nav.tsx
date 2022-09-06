import { Subtitle } from '@atoms/text/Subtitle'

export const Nav = () => {
  return (
    <nav className="flex justify-center gap-10">
      <Subtitle variant="span" text="Projects" className="hover:underline cursor-pointer" />
      <Subtitle variant="span" text="Blog" className="hover:underline cursor-pointer" />
      <Subtitle variant="span" text="Contact" className="hover:underline cursor-pointer" />
    </nav>
  )
}
