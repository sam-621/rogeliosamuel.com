import { Title } from '@atoms/text/Title'
import { Carousel } from '@containers/Carousel'
import { projects } from '@data/projects'
import { Card } from '@items/Card'

import { SwiperSlide } from 'swiper/react'

export const Projects = () => {
  return (
    <section className="mt-12">
      <div className="mb-6">
        <Title variant="h2" text="Projects" className="text-center" />
      </div>
      <div className="mx-3">
        <Carousel>
          {projects.map((item, i) => (
            <SwiperSlide key={i} className="mb-10 rounded">
              <Card {...item} />
            </SwiperSlide>
          ))}
        </Carousel>
      </div>
    </section>
  )
}
