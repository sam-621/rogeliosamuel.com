import { Carousel } from '@containers/Carousel'
import { projects } from '@data/projects'
import { Card } from '@items/Card'
import { SectionLayout } from 'components/layouts/SectionLayout'

import { SwiperSlide } from 'swiper/react'

export const Projects = () => {
  return (
    <SectionLayout title="Projects">
      <Carousel>
        {projects.map((item, i) => (
          <SwiperSlide key={i} className="mb-10 rounded">
            <Card {...item} />
          </SwiperSlide>
        ))}
      </Carousel>
    </SectionLayout>
  )
}
