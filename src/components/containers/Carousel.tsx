// Import Swiper React components
import { Swiper } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination } from 'swiper'
import { FC, PropsWithChildren } from 'react'
import { CarouselItem } from './CarouselItem'

const Carousel: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true
      }}
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={1}
    >
      {children}
    </Swiper>
  )
}

export default Object.assign(Carousel, {
  Item: CarouselItem
})
