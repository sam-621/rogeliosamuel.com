import { Title } from '@atoms/text/Title'
import { Carousel } from '@containers/Carousel'
import { blogs } from '@data/blogs'
import { Card } from '@items/Card'

import { SwiperSlide } from 'swiper/react'

export const Blogs = () => {
  return (
    <section className="mt-12">
      <div className="mb-6">
        <Title variant="h2" text="Blogs" className="text-center" />
      </div>
      <div className="mx-3">
        <Carousel>
          {blogs.map((item, i) => (
            <SwiperSlide key={i} className="mb-10 rounded">
              <Card key={i} {...item} />
            </SwiperSlide>
          ))}
          {/* <SwiperSlide className="mb-10 rounded">
            <Card />
          </SwiperSlide>
          <SwiperSlide className="mb-10">
            <Card />
          </SwiperSlide>
          <SwiperSlide className="mb-10">
            <Card />
          </SwiperSlide> */}
        </Carousel>
      </div>
    </section>
  )
}
