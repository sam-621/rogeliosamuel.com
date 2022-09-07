/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Subtitle } from '@atoms/text/Subtitle'
import { scrollToElement } from '@helpers/view'
import { FC, MutableRefObject } from 'react'

export const Nav: FC<Props> = ({ refSections }) => {
  const [projects, blogs, contactUs] = refSections
  return (
    <nav className="flex justify-center gap-10">
      <button onClick={() => scrollToElement(projects.current!)}>
        <Subtitle variant="span" text="Projects" className="hover:underline cursor-pointer" />
      </button>
      <button onClick={() => scrollToElement(blogs.current!)}>
        <Subtitle variant="span" text="Blog" className="hover:underline cursor-pointer" />
      </button>
      <button onClick={() => scrollToElement(contactUs.current!)}>
        <Subtitle variant="span" text="Contact" className="hover:underline cursor-pointer" />
      </button>
    </nav>
  )
}

type Props = {
  refSections: MutableRefObject<null>[]
}
