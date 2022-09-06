import { Icons } from '@atoms/icons'
import { Subtitle } from '@atoms/text/Subtitle'

export const Footer = () => {
  return (
    <footer className="my-12">
      <div>
        <Subtitle
          variant="description"
          text="I like building projects with other people and teach, so if you´d like to get in touch with me, these are some options."
          className="text-lg text-center"
        />
      </div>
      <div>
        <Icons />
      </div>
    </footer>
  )
}
