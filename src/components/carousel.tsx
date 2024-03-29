import { useEffect, useRef } from 'react'
import { Navigation, Pagination } from 'swiper/modules'
import { SwiperSlide, Swiper } from 'swiper/react'
import { testimonials } from '../constants'
import { Heading } from './heading'
import { SwiperSlideButton } from './swiper-slide-button'

interface ICarouselProps {
  forceClickOnPreviousButton: boolean
  forceClickOnNextButton: boolean
}

export function Carousel({
  forceClickOnPreviousButton,
  forceClickOnNextButton,
}: ICarouselProps) {
  const refPreviousSlideButton = useRef<HTMLButtonElement>(null)
  const refNextSlideButton = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (forceClickOnPreviousButton) {
      refPreviousSlideButton.current?.click()
    }

    if (forceClickOnNextButton) {
      refNextSlideButton.current?.click()
    }
  }, [forceClickOnNextButton, forceClickOnPreviousButton])

  return (
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
        ref={refPreviousSlideButton}
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
              <Heading as="h4" size="heading4">
                {testimonial.name}
              </Heading>

              <p className="text-gray-600">{testimonial.role}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
