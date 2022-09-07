import { CarouselNavigation } from '@containers/CarouselNavigation'
import { projects } from '@data/projects'
import { CardDesktop } from '@items/Desktop/CardDesktop'
import { SectionLayout } from 'components/layouts/SectionLayout'
import { FC, MutableRefObject } from 'react'

import { SwiperSlide } from 'swiper/react'

export const ProjectsDesktop: FC<Props> = ({ refSection }) => {
  return (
    <>
      <div ref={refSection}></div>
      <SectionLayout title="Projects">
        <CarouselNavigation>
          {projects.map((item, i) => (
            <SwiperSlide key={i} className="mb-10 rounded">
              <CardDesktop {...item} />
            </SwiperSlide>
          ))}
        </CarouselNavigation>
      </SectionLayout>
    </>
  )
}

type Props = {
  refSection: MutableRefObject<null>
}
