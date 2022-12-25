import Image from 'next/image'

import { SectionHeader } from '../molecules/SectionHeader'

export const LetsTalk = () => {
  return (
    <>
      <div id="lets-talk" />
      <section>
        <SectionHeader
          title="Let's talk"
          subtitle={`Do you want us to work together? Do you have an idea and want to bring it to reality? Do you need an advice? Or do you just want to say hello? I'll be happy to answer you.`}
        />
        <div className="flex gap-8 justify-center mt-8 lg:mt-20">
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
      </section>
    </>
  )
}
