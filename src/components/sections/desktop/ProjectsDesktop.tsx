import { CarouselNavigation } from '@containers/CarouselNavigation'
import { projects } from '@data/projects'
import { CardDesktop } from '@items/Desktop/CardDesktop'
import { SectionLayout } from 'components/layouts/SectionLayout'

import { SwiperSlide } from 'swiper/react'

export const ProjectsDesktop = () => {
  return (
    <SectionLayout title="Projects">
      <CarouselNavigation>
        {projects.map((item, i) => (
          <SwiperSlide key={i} className="mb-10 rounded">
            <CardDesktop {...item} />
          </SwiperSlide>
        ))}
      </CarouselNavigation>
    </SectionLayout>
  )
}
