import { CarouselNavigation } from '@containers/CarouselNavigation'
import { blogs } from '@data/blogs'
import { CardDesktop } from '@items/Desktop/CardDesktop'
import { SectionLayout } from 'components/layouts/SectionLayout'
import { SwiperSlide } from 'swiper/react'

export const BlogsDesktop = () => {
  return (
    <SectionLayout title="Blogs">
      <CarouselNavigation>
        {blogs.map((item, i) => (
          <SwiperSlide key={i} className="mb-10 rounded">
            <CardDesktop {...item} />
          </SwiperSlide>
        ))}
      </CarouselNavigation>
    </SectionLayout>
  )
}
