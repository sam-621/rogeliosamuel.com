// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination } from 'swiper'

export const Projects = () => {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true
      }}
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="px-5">
          <h1 className="text-white">Hola</h1>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="px-5">
          <h1 className="text-white">Hola</h1>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="px-5">
          <h1 className="text-white">Hola</h1>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="px-5">
          <h1 className="text-white">Hola</h1>
        </div>
      </SwiperSlide>
      ...
    </Swiper>
  )
}
