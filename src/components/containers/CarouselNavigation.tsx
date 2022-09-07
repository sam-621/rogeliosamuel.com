import { Swiper } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'

import { Navigation } from 'swiper'
import { FC, PropsWithChildren } from 'react'

export const CarouselNavigation: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Swiper
      modules={[Navigation]}
      navigation={true}
      spaceBetween={20}
      slidesPerView={1}
      className="rounded"
    >
      {children}
    </Swiper>
  )
}
