import { CardImage } from '@atoms/images/CardImage'
import { ICard } from '@interfaces/card.interface'
import { FC } from 'react'
import { CardInfoDesktop } from './CardInfoDesktop'

export const CardDesktop: FC<Props> = ({ title, imageUrl, description, buttons }) => {
  return (
    <article className="grid grid-cols-2 gap-8 items-center">
      <div>
        <CardImage src={imageUrl} alt={title} />
      </div>
      <div>
        <CardInfoDesktop
          title={title}
          imageUrl={imageUrl}
          description={description}
          buttons={buttons}
        />
      </div>
    </article>
  )
}

type Props = ICard
