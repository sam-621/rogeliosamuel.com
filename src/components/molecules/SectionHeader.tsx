import { FC } from 'react'

import { Subtitle } from '../atoms/Subtitle'
import { Title } from '../atoms/Title'

export const SectionHeader: FC<Props> = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col gap-4">
      <Title variant="h2" className="text-center">
        {title}
      </Title>
      <Subtitle className="text-center">{subtitle}</Subtitle>
    </div>
  )
}

type Props = {
  title: string
  subtitle: string
}
