import Image from 'next/image'

import { Button } from '../atoms/Button'
import { Subtitle } from '../atoms/Subtitle'
import { Title } from '../atoms/Title'

export const Hero = () => {
  return (
    <>
      <div className="absolute left-44 top-52 floating" style={{ animationDelay: '-2s' }}>
        <Image src="/icons/techs/react.svg" width={80} height={80} />
      </div>
      <div className="absolute top-60 right-44 floating" style={{ animationDelay: '-1s' }}>
        <Image src="/icons/techs/nest.svg" width={80} height={80} />
      </div>
      <div className="absolute left-52 bottom-40 floating" style={{ animationDelay: '-3s' }}>
        <Image src="/icons/techs/typescript.svg" width={152} height={80} />
      </div>
      <div className="absolute bottom-32 right-56 floating" style={{ animationDelay: '-4s' }}>
        <Image src="/icons/techs/mongodb.svg" width={152} height={80} />
      </div>
      <div className="hero-height flex items-center justify-center backdrop-blur-sm">
        <div className="flex flex-col gap-4 opens">
          <Title className="md:text-center">Software developer</Title>
          <Subtitle className="md:text-center max-w-3xl">
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
