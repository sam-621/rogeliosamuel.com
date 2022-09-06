import { FilledLink } from '@atoms/buttons/FilledLink'
import { ProfileImage } from '@atoms/images/ProfileImage'
import { Subtitle } from '@atoms/text/Subtitle'
import { Title } from '@atoms/text/Title'

export const HeaderDesktop = () => {
  return (
    <header className="flex justify-center gap-40 items-center mt-28">
      <div className="flex flex-col gap-12">
        <div>
          <Title variant="h1" text="Rogelio Samuel" className="whitespace-nowrap" />
          <Subtitle variant="span" text="Frontend developer" className="text-xl lg:text-3xl" />
        </div>
        <FilledLink variant="primary" text="Download CV" className="w-fit" />
      </div>
      <div>
        <ProfileImage />
      </div>
    </header>
  )
}
