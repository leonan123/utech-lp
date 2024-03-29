import { PiArrowRightBold, PiArrowLeftBold } from 'react-icons/pi'

import { useEffect, useState } from 'react'

import 'swiper/css'
import 'swiper/css/pagination'

import { Heading } from '../heading'
import { Carousel } from '../carousel'

export function Testimonials() {
  const [scrollDirectionClick, setScrollDirectionClick] = useState<
    'left' | 'right' | null
  >(null)

  useEffect(() => {
    if (scrollDirectionClick !== null) {
      setScrollDirectionClick(null)
    }
  }, [scrollDirectionClick])

  function handleScrollDirectionClick(direction: 'left' | 'right') {
    setScrollDirectionClick(direction)
  }

  return (
    <section className="mx-4 pb-0 pt-20 md:mx-10 md:max-w-[1440px] md:pb-20 3xl:mx-auto">
      <div className="flex items-center justify-between">
        <Heading as="h2">What everyone says</Heading>

        <div className="flex items-center gap-6">
          <button
            className="hidden size-9 cursor-pointer items-center justify-center rounded-full border border-orange-600 text-orange-600 transition-colors hover:bg-orange-600 hover:text-white min-[687px]:flex"
            onClick={() => handleScrollDirectionClick('left')}
          >
            <PiArrowLeftBold />
            <span className="sr-only">Previous testimonials</span>
          </button>

          <button
            className="hidden size-9 cursor-pointer items-center justify-center rounded-full border border-orange-600 text-orange-600 transition-colors hover:bg-orange-600 hover:text-white min-[687px]:flex"
            onClick={() => handleScrollDirectionClick('right')}
          >
            <PiArrowRightBold />
            <span className="sr-only">Next testimonials</span>
          </button>
        </div>
      </div>

      <Carousel
        forceClickOnNextButton={scrollDirectionClick === 'right'}
        forceClickOnPreviousButton={scrollDirectionClick === 'left'}
      />
    </section>
  )
}
