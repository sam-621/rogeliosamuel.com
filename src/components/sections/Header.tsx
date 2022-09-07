import { FilledLink } from '@atoms/buttons/FilledLink'
import { Icons } from '@atoms/icons'
import { ProfileImage } from '@atoms/images/ProfileImage'
import { Subtitle } from '@atoms/text/Subtitle'
import { Title } from '@atoms/text/Title'

export const Header = () => {
  return (
    <header>
      <div className="flex justify-center">
        <ProfileImage />
      </div>
      <div className="flex flex-col items-center mt-5">
        <Title variant="h1" text="Rogelio Samuel" />
        <Subtitle variant="span" text="Frontend developer" />
      </div>
      <Icons />
      <div className="flex justify-center mt-5">
        <FilledLink url="/CV.pdf" variant="primary" text="Download CV" />
      </div>
    </header>
  )
}
