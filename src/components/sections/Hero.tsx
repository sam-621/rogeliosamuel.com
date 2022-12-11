import Image from 'next/image'

import { Button } from '../atoms/Button'
import { Subtitle } from '../atoms/Subtitle'
import { Title } from '../atoms/Title'
import { HeroIcons } from '../molecules/HeroIcons'

export const Hero = () => {
  return (
    <section>
      <HeroIcons />
      <div className="flex items-center justify-center backdrop-blur-sm hero-height">
        <div className="flex flex-col gap-4">
          <Title className="md:text-center">Software developer</Title>
          <Subtitle className="md:text-center max-w-3xl">
            As a software developer i design, develop and deliver software products to improve the
            world with technology
          </Subtitle>
          <div className="flex gap-8 md:justify-center">
            <Image src="/icons/github.svg" width={24} height={24} />
            <Image src="/icons/linkedin.svg" width={24} height={24} />
          </div>
          <div className="mt-8 md:mx-auto">
            <Button href="/CV.pdf">Download CV</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
