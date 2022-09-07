import { FilledLink } from '@atoms/buttons/FilledLink'
import { OutlinedLink } from '@atoms/buttons/OutlinedLink'
import { CardBg } from '@atoms/images/CardBg'
import { Subtitle } from '@atoms/text/Subtitle'
import { Title } from '@atoms/text/Title'
import { ICard } from '@interfaces/card.interface'
import { FC } from 'react'

export const CardInfoDesktop: FC<Props> = ({ title, description, imageUrl, buttons }) => {
  return (
    <div className="bg-cards md:h-72 lg:h-80 xl:h-96 flex flex-col justify-center">
      <CardBg src={imageUrl} alt={title} hasBlur />
      <div className="h-full fixed z-40 flex flex-col justify-center p-10">
        <div className="w-full mb-4">
          <Title variant="h2" text={title} className="" />
        </div>
        <div className="w-full">
          <Subtitle variant="description" text={description} />
          <div className="mt-8 flex gap-12">
            {buttons.map((btn) => btn)}
            {/* <FilledLink variant="secondary" text="Live Demo" className="md:text-xs lg:text-base" />
            <OutlinedLink variant="primary" text="Code" className="md:text-xs lg:text-base" /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

type Props = ICard
