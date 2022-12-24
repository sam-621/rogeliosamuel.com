import { Subtitle } from '../atoms/Subtitle'
import { SectionHeader } from '../molecules/SectionHeader'

export const AboutMe = () => {
  return (
    <section className="flex flex-col gap-4">
      <SectionHeader title="About me" />
      <div className="flex flex-col justify-center gap-4 md:flex-row items-center">
        <div className="flex justify-center w-full">
          <img
            src="/img/Samuel.jpg"
            alt="Samuel"
            className="object-cover rounded-full w-[160px] h-[160px] md:w-[300px] md:h-[300px] xl:w-[400px] xl:h-[400px]"
          />
        </div>
        <div>
          <Subtitle className="text-center md:text-left">
            Im from Culiacan, Sinaloa, México
          </Subtitle>
          <br />
          <Subtitle className="text-center md:text-left">
            I’m a software developer specialized in web technologies, my day to day is React and
            Node.js with Typescript.
          </Subtitle>
          <br />
          <Subtitle className="text-center md:text-left">
            I like working in a team, facing new challenges and constantly learning
          </Subtitle>
        </div>
      </div>
    </section>
  )
}
