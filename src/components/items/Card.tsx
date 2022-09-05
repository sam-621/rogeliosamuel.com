import { CardImage } from '@atoms/images/CardImage'
import { ICard } from '@interfaces/card.interface'
import { FC, useState } from 'react'
import { CardInfo } from './CardInfo'

export const Card: FC<Props> = ({ title, imageUrl, description, buttons }) => {
  const [isActive, setIsActive] = useState(false)
  return (
    <div className="">
      {isActive && (
        <CardInfo title={title} imageUrl={imageUrl} description={description} buttons={buttons} />
      )}
      <div className="" onClick={() => setIsActive(true)}>
        <CardImage src={imageUrl} alt={title} hasBlur={isActive} />
      </div>
    </div>
  )
}

type Props = ICard
