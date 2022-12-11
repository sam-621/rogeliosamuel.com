import Image from 'next/image'

import { Subtitle } from '../atoms/Subtitle'

export const ProjectCard = () => {
  return (
    <article className="border border-stroke-cards rounded-3xl p-4 flex flex-col gap-8 bg-project-card">
      <div>
        <div className="bg-[#092738] p-6 rounded-2xl">
          <Image
            src="/img/projects/edteam.png"
            layout="responsive"
            width={261}
            height={122}
            className="rounded-2xl"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl text-simple-title font-semibold">EDteam public website with ISR</h3>
        <div className="flex justify-start">
          <Image src="/icons/companies/faktible.svg" width={80} height={27} />
        </div>
        <Subtitle>
          A website for the edteam education platform with ISR and Typescript, this website was 80%
          faster than the old one, with a better code structure and modern solutions for the
          information management.
        </Subtitle>
      </div>
      <a
        href=""
        className="border border-[rgba(244, 247, 251, 0.6)] rounded-lg py-3 text-center text-subtitle"
      >
        Project in live
      </a>
    </article>
  )
}
