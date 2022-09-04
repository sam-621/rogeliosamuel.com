import { Title } from '@atoms/text/Title'
import { Carousel } from '@containers/Carousel'
import { Project } from '@items/Project'

import { SwiperSlide } from 'swiper/react'

export const Projects = () => {
  return (
    <section className="mt-12">
      <div className="mb-6">
        <Title variant="h2" text="Projects" className="text-center" />
      </div>
      <div>
        <Carousel>
          <SwiperSlide className="flex justify-center mb-10">
            <Project />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center mb-10">
            <Project />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center mb-10">
            <Project />
          </SwiperSlide>
        </Carousel>
      </div>
    </section>
  )
}
