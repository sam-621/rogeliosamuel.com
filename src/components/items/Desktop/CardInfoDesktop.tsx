import { FilledLink } from '@atoms/buttons/FilledLink'
import { OutlinedLink } from '@atoms/buttons/OutlinedLink'
import { Subtitle } from '@atoms/text/Subtitle'
import { Title } from '@atoms/text/Title'
import { ICard } from '@interfaces/card.interface'
import { FC } from 'react'

export const CardInfoDesktop: FC<Props> = ({ title, description, buttons }) => {
  return (
    <div>
      <div>
        <Title variant="h2" text={title} />
      </div>
      <div>
        <Subtitle variant="description" text={description} />
        <div>
          <FilledLink variant="secondary" text="Live Demo" />
          <OutlinedLink variant="primary" text="Code" />
        </div>
      </div>
    </div>
  )
}

type Props = ICard
