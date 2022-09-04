import { FilledLink } from '@atoms/buttons/FilledLink'
import { ProfileImage } from '@atoms/images/ProfileImage'
import { Subtitle } from '@atoms/text/Subtitle'
import { Title } from '@atoms/text/Title'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

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
      <div className="flex justify-center gap-8 mt-5">
        <AiFillGithub size={30} color="white" />
        <AiFillLinkedin size={30} color="white" />
      </div>
      <div className="flex justify-center mt-5">
        <FilledLink variant="primary" text="Download CV" />
      </div>
    </header>
  )
}
