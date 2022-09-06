import { Carousel } from '@containers/Carousel'
import { blogs } from '@data/blogs'
import { Card } from '@items/Card'
import { SectionLayout } from 'components/layouts/SectionLayout'

import { SwiperSlide } from 'swiper/react'

export const Blogs = () => {
  return (
    <SectionLayout title="Blog">
      <Carousel>
        {blogs.map((item, i) => (
          <SwiperSlide key={i} className="mb-10 rounded">
            <Card key={i} {...item} />
          </SwiperSlide>
        ))}
      </Carousel>
    </SectionLayout>
  )
}
