import { FC, PropsWithChildren } from 'react'
import { SwiperSlide } from 'swiper/react'

export const CarouselItem: FC<PropsWithChildren> = ({ children }) => {
  return <SwiperSlide>{children}</SwiperSlide>
}
