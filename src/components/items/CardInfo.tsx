import { Subtitle } from '@atoms/text/Subtitle'
import { Title } from '@atoms/text/Title'
import { ICard } from '@interfaces/card.interface'
import { FC } from 'react'

export const CardInfo: FC<Props> = ({ title, description, buttons }) => {
  return (
    <>
      <div className="bg-cards h-full opacity-80 w-full fixed z-40 transition"></div>
      <div className=" h-full w-full fixed z-40 p-3">
        <Title variant="h3" text={title} />
        <div className="flex flex-col h-full justify-between">
          <div className="mt-5">
            <Subtitle variant="description" text={description} />
          </div>
          <div className="flex justify-evenly mt-5 mb-8">{buttons.map((btn) => btn)}</div>
        </div>
      </div>
    </>
  )
}

type Props = ICard
