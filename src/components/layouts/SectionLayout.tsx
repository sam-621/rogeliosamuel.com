import { Title } from '@atoms/text/Title'
import { FC, ReactNode } from 'react'

export const SectionLayout: FC<Props> = ({ title, children }) => {
  return (
    <section className="mt-12">
      <div className="mb-6">
        <Title variant="h2" text={title} className="text-center" />
      </div>
      <div className="">{children}</div>
    </section>
  )
}

type Props = {
  title: string
  children: ReactNode
}
