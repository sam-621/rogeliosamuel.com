import { CarouselNavigation } from '@containers/CarouselNavigation'
import { blogs } from '@data/blogs'
import { CardDesktop } from '@items/Desktop/CardDesktop'
import { SectionLayout } from 'components/layouts/SectionLayout'
import { FC, MutableRefObject } from 'react'
import { SwiperSlide } from 'swiper/react'

export const BlogsDesktop: FC<Props> = ({ refSection }) => {
  return (
    <>
      <div ref={refSection}></div>
      <SectionLayout title="Blogs">
        <CarouselNavigation>
          {blogs.map((item, i) => (
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
