import { FiArrowRight } from 'react-icons/fi'
import { Button } from '../button'

import * as Card from '../card'

export function CoolFeatures() {
  return (
    <section className="mx-4 flex flex-wrap items-center py-20 md:mx-10 md:max-w-[1440px] lg:flex-nowrap 3xl:mx-auto">
      <div className="space-y-8">
        <h2 className="text-2xl font-black text-blue-900 sm:text-4xl lg:text-6xl">
          All the cool{' '}
          <span className="relative">
            features
            <img
              src="/images/underlined-lg.svg"
              alt=""
              className="absolute -bottom-1 left-0 -z-10 w-full"
            />
          </span>
        </h2>

        <p className=" text-base text-blue-900 sm:text-xl sm:leading-8 md:max-w-xl">
          Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio ac.
          In et dolor eu donec maecenas nulla. Cum sed orci, sit pellentesque
          quisque feugiat cras ullamcorper. Ultrices in amet, ullamcorper non
          viverra a, neque orci.
        </p>

        <Button
          variant="noBorder"
          size="lg"
          className="flex items-center gap-4 text-blue-600 focus-visible:ring-blue-600"
        >
          View all the features
          <FiArrowRight className="ml-4" />
        </Button>
      </div>

      <div className="relative flex min-h-[522px] flex-1 flex-col items-start justify-center bg-[url('/images/blob-cool-features-section.svg')] bg-contain bg-center bg-no-repeat lg:items-center">
        <div className="flex gap-3">
          <Card.Root as="div" className="h-[fit-content] sm:w-[225px]">
            <Card.Header>
              <Card.Badge text="Popular" />
              <Card.Title title="Design for how people think" />
            </Card.Header>

            <Card.Content>
              <p className="text-sm leading-5 text-gray-600">
                Aliquam ut euismod condimentum elementum ultricies volutpat sit
                non.
              </p>
            </Card.Content>

            <Card.Footer>
              <Button
                size="md"
                variant="outline"
                className="w-full border-blue-600 text-sm text-blue-600 hover:bg-blue-600 hover:text-white"
              >
                Take Lesson
              </Button>
            </Card.Footer>
          </Card.Root>

          <div className="relative h-[169px] w-[215px] self-end rounded-xl bg-white p-1.5 shadow-md">
            <img
              src="/images/image-cool-features-1.webp"
              alt=""
              className="size-full rounded-xl"
            />

            <img
              src="/images/image-cool-features-2.png"
              alt=""
              className="absolute -right-16 top-14 w-[140px]"
            />
          </div>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <div className="relative h-[179px] w-[304px] self-end rounded-xl bg-white p-1.5 shadow-md">
            <img
              src="/images/image-cool-features-3.png"
              alt=""
              className="size-full rounded-xl object-cover"
            />
          </div>

          <div className="relative h-[179px] w-[232px] self-end rounded-xl bg-white p-1.5 shadow-md">
            <img
              src="/images/image-cool-features-4.webp"
              alt=""
              className="size-full rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
