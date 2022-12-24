import Image from 'next/image'

import { MAIN_DESCRIPTION } from '@data'

import { Button } from '../atoms/Button'
import { Subtitle } from '../atoms/Subtitle'
import { Title } from '../atoms/Title'
import { HeroIcons } from '../molecules/HeroIcons'

export const Hero = () => {
  return (
    <section id="hero">
      <HeroIcons />
      <div className="flex items-center justify-center backdrop-blur-sm hero-height">
        <div className="flex flex-col gap-4">
          <Title className="md:text-center">Software developer</Title>
          <Subtitle className="md:text-center max-w-3xl">{MAIN_DESCRIPTION}</Subtitle>
          <div className="flex gap-8 md:justify-center">
            <a href="https://github.com/sam-621" target="_blank" rel="noreferrer">
              <Image src="/icons/github.svg" width={32} height={32} alt="github" />
            </a>
            <a
              href="https://www.linkedin.com/in/rogelio-samuel-moreno-corrales/"
              target="_blank"
              rel="noreferrer"
            >
              <Image src="/icons/linkedin.svg" width={32} height={32} alt="linkedin" />
            </a>
          </div>
          <div className="mt-8 md:mx-auto">
            <Button href="/CV.pdf" className="md:hidden">
              Download CV
            </Button>
            <div className="hidden md:block animate-bounce">
              <Image className="" src="/icons/down.svg" width={36} height={36} alt="down" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
