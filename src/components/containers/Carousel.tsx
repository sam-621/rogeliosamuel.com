import { Swiper } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination } from 'swiper'
import { FC, PropsWithChildren } from 'react'

export const Carousel: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
        bulletClass: 'swiper-pagination-bullet bullet-i'
      }}
      modules={[Pagination]}
      spaceBetween={20}
      slidesPerView={1}
      className="rounded"
    >
      {children}
    </Swiper>
  )
}
