import Image from 'next/image'

import { Button } from '../atoms/Button'
import { Subtitle } from '../atoms/Subtitle'
import { Title } from '../atoms/Title'

export const Hero = () => {
  return (
    <>
      <div className="absolute">
        <Image src="/icons/github.svg" width={24} height={24} />
      </div>
      <div className="hero-height flex items-center justify-center backdrop-blur-sm">
        <div className="flex flex-col gap-4">
          <Title className="md:text-center">Software developer</Title>
          <Subtitle className="md:text-center">
            As a software developer i design, develop and deliver software products to improve the
            world with technology
          </Subtitle>
          <div className="flex gap-8 md:justify-center">
            <Image src="/icons/github.svg" width={24} height={24} />
            <Image src="/icons/linkedin.svg" width={24} height={24} />
          </div>
          <div className="mt-4 md:mx-auto">
            <Button href="/CV.pdf">Download CV</Button>
          </div>
        </div>
      </div>
    </>
  )
}
