import { Icons } from '@atoms/icons'
import { Subtitle } from '@atoms/text/Subtitle'
import { FC, MutableRefObject } from 'react'

export const Footer: FC<Props> = ({ refSection }) => {
  return (
    <footer className="my-12 md:my-40" ref={refSection}>
      <div>
        <Subtitle
          variant="description"
          text="I like building projects with other people and teach, so if you´d like to get in touch with me, these are some options."
          className="text-lg text-center md:text-xl"
        />
      </div>
      <div>
        <Icons />
      </div>
    </footer>
  )
}

type Props = {
  /**
   * This props is only useful in desktop mode, in mobile mode you can just pass an empty mutable ref object
   */
  refSection: MutableRefObject<null>
}
