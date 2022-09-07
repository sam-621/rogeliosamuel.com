import { FilledLink } from '@atoms/buttons/FilledLink'
import { OutlinedLink } from '@atoms/buttons/OutlinedLink'
import { Subtitle } from '@atoms/text/Subtitle'
import { Title } from '@atoms/text/Title'
import { ICard } from '@interfaces/card.interface'
import { FC } from 'react'

export const CardInfoDesktop: FC<Props> = ({ title, description }) => {
  return (
    <div className="bg-cards md:h-72 lg:h-80 xl:h-96 p-10 flex flex-col justify-center">
      <div className="w-full mb-4">
        <Title variant="h2" text={title} className="" />
      </div>
      <div className="w-full">
        <Subtitle variant="description" text={description} />
        <div className="mt-8 flex gap-12">
          <FilledLink variant="secondary-2" text="Live Demo" className="md:text-xs lg:text-base" />
          <OutlinedLink variant="primary" text="Code" className="md:text-xs lg:text-base" />
        </div>
      </div>
    </div>
  )
}

type Props = ICard
