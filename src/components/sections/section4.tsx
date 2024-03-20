import { FiArrowRight } from 'react-icons/fi'
import { Button } from '../button'

export function Section4() {
  return (
    <section className="mx-4 flex max-w-[1440px] flex-wrap-reverse gap-11 py-20 md:mx-10 lg:flex-nowrap 3xl:mx-auto">
      <img
        src="/images/students.svg"
        alt="Students"
        className="w-full lg:w-1/2"
      />

      <div className="flex flex-col justify-center gap-5 sm:gap-8">
        <h2 className="text-2xl font-black tracking-wide text-blue-900 sm:text-6xl sm:tracking-tight md:tracking-wide">
          Meet{' '}
          <span className="relative">
            international{' '}
            <img
              src="images/icon-plane-departure.svg"
              alt=""
              className="absolute -top-7 right-4 size-8 sm:-top-10 sm:right-2 sm:size-11"
            />
          </span>{' '}
          students & teachers
        </h2>

        <p className="text-justify text-base text-blue-900 sm:text-xl sm:leading-8 md:max-w-xl">
          Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus
          risus ac vel, velit, nunc. Eget commodo eget in aliquam facilisi
          facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, faucibus
          aenean lorem faucibus integer.
        </p>

        <Button
          variant="noBorder"
          size="lg"
          className="flex items-center gap-4 text-blue-600 focus-visible:ring-blue-600"
        >
          Find more about the app
          <FiArrowRight className="ml-4" />
        </Button>
      </div>
    </section>
  )
}
