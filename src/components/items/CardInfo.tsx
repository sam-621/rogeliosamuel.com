import { Subtitle } from '@atoms/text/Subtitle'
import { Title } from '@atoms/text/Title'
import { ICard } from '@interfaces/card.interface'
import { FC } from 'react'

export const CardInfo: FC<Props> = ({ title, description, buttons }) => {
  return (
    <div className="max-h-full overflow-hidden">
      <div className="bg-cards h-full opacity-80 w-full fixed z-40 transition"></div>
      <div className=" h-full w-full fixed z-40 p-3">
        <div className="overflow-hidden">
          <Title
            variant="h3"
            text={title}
            className="whitespace-nowrap text-ellipsis overflow-hidden"
          />
        </div>
        <div className="flex flex-col h-3/4 justify-between">
          <div className="mt-2 overflow-hidden">
            <Subtitle
              variant="description"
              text={description}
              className="text-justify text-ellipsis overflow-hidden"
            />
          </div>
          <div className="flex justify-evenly mt-1">{buttons.map((btn) => btn)}</div>
        </div>
      </div>
    </div>
  )
}

type Props = ICard
