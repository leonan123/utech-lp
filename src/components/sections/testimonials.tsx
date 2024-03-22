import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { SwiperSlideButton } from '../swiper-slide'

import { PiArrowRightBold, PiArrowLeftBold } from 'react-icons/pi'

import { useRef } from 'react'

import 'swiper/css'
import 'swiper/css/pagination'

import { testimonials } from '../../constants'

export function Testimonials() {
  const refPrevSlideButton = useRef<HTMLButtonElement>(null)
  const refNextSlideButton = useRef<HTMLButtonElement>(null)

  return (
    <section className="mx-4 py-20 md:mx-10 md:max-w-[1440px] 3xl:mx-auto">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-black text-blue-900 sm:text-4xl lg:text-6xl">
          What everyone says
        </h2>

        <div className="flex items-center gap-6">
          <button
            className="hidden size-9 cursor-pointer items-center justify-center rounded-full border border-orange-600 text-orange-600 transition-colors hover:bg-orange-600 hover:text-white min-[687px]:flex"
            onClick={() => refPrevSlideButton.current?.click()}
          >
            <PiArrowLeftBold />
            <span className="sr-only">Previous testimonials</span>
          </button>

          <button
            className="hidden size-9 cursor-pointer items-center justify-center rounded-full border border-orange-600 text-orange-600 transition-colors hover:bg-orange-600 hover:text-white min-[687px]:flex"
            onClick={() => refNextSlideButton.current?.click()}
          >
            <PiArrowRightBold />
            <span className="sr-only">Next testimonials</span>
          </button>
        </div>
      </div>

      <Swiper
        className="mt-14 min-h-[calc(305px+24px)]"
        modules={[Navigation, Pagination]}
        direction="horizontal"
        spaceBetween={24}
        autoplay={true}
        loop={true}
        loopAddBlankSlides={true}
        pagination={{
          clickable: true,
          type: 'bullets',
          bulletClass: 'swiper-pagination-bullet bg-orange-600',
          horizontalClass: 'bottom-[40px!important]',
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          687: {
            slidesPerView: 2,
            pagination: false,
          },
          1024: {
            slidesPerView: 3,
            pagination: false,
          },
        }}
      >
        <SwiperSlideButton
          to="left"
          ref={refPrevSlideButton}
          className="d-none"
        />
        <SwiperSlideButton
          to="right"
          ref={refNextSlideButton}
          className="d-none"
        />

        {testimonials.map((testimonial, index) => (
          <SwiperSlide
            className="min-h-auto flex flex-col justify-between rounded-2xl border border-gray-100 p-8 shadow-lg hover:cursor-grab active:cursor-grabbing md:min-h-[305px]"
            key={index}
          >
            <p className="line-clamp-4 text-ellipsis text-lg leading-8">
              {testimonial.content}
            </p>

            <div className="mt-8 flex items-center gap-4">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="size-16 rounded-full"
              />

              <div>
                <h5 className="text-lg">{testimonial.name}</h5>
                <p className="text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
