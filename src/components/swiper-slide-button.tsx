import React, { ComponentProps } from 'react'
import { useSwiper } from 'swiper/react'

interface ISwiperSlideButtonProps extends ComponentProps<'button'> {
  to: 'left' | 'right'
}

export const SwiperSlideButton = React.forwardRef<
  HTMLButtonElement,
  ISwiperSlideButtonProps
>(({ to, ...props }, ref) => {
  const swiper = useSwiper()

  function handleSlideSwiper() {
    if (to === 'left') {
      swiper.slidePrev()
      return
    }

    swiper.slideNext()
  }

  return <button ref={ref} onClick={handleSlideSwiper} {...props} />
})

SwiperSlideButton.displayName = 'SwiperSlideButton'
