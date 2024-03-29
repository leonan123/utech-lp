import { FiCheck, FiArrowRight } from 'react-icons/fi'
import { Button } from '../button'
import * as Card from '../card'
import { Heading } from '../heading'

import * as DesktopScreen from '../desktop-screen'

export function FeatureSection() {
  return (
    <section className="mx-4 max-w-[1440px] py-20 md:mx-10 3xl:mx-auto">
      <div className="flex flex-wrap items-center justify-between gap-8 text-blue-900 xl:flex-nowrap xl:gap-0">
        <div className="w-full space-y-8">
          <Heading
            as="h2"
            size="heading2"
            className="max-w-[544px] lg:max-w-[700px] xl:text-start"
          >
            An{' '}
            <span className="relative">
              all-in-one{' '}
              <img
                src="/images/underlined-xl.svg"
                alt=""
                className="absolute -bottom-0.5 right-5 -z-10 max-w-[8rem] sm:max-w-[none]"
              />
            </span>{' '}
            app that makes it easier
          </Heading>

          <ul>
            <li className="flex items-center gap-2 text-xl leading-9">
              <FiCheck className="font-bold" />
              <span>Est et in pharetra magna adipiscing ornare aliquam.</span>
            </li>

            <li className="flex items-center gap-2 text-xl leading-9">
              <FiCheck />
              <span>Tellus arcu sed consequat ac velit ut eu blandit.</span>
            </li>

            <li className="flex items-center gap-2 text-xl leading-9">
              <FiCheck />
              <span>Ullamcorper ornare in et egestas dolor orci.</span>
            </li>
          </ul>

          <Button
            variant="noBorder"
            size="lg"
            className="flex items-center gap-4 text-blue-600 focus-visible:ring-blue-600"
          >
            Find more about the app
            <FiArrowRight className="ml-4" />
          </Button>
        </div>

        <div className="relative flex flex-col items-end lg:mx-auto xl:mx-0">
          <img
            src="/images/blobGroup-2.svg"
            alt=""
            className="absolute -left-40 -top-12 -z-10"
          />

          <DesktopScreen.Root className="max-h-[391px] max-w-[600px] bg-white">
            <DesktopScreen.Header className="min-h-[none] gap-0 py-0" />

            <DesktopScreen.Content className="px-2 pb-2">
              <div className="h-full w-full rounded-e-2xl bg-[url('/images/video.svg')] bg-cover" />
            </DesktopScreen.Content>
          </DesktopScreen.Root>

          <ul className="-mt-11 mr-6 flex items-center gap-4 sm:mr-6">
            <Card.Root>
              <Card.Header>
                <Card.Badge text="Featured" />
                <Card.Title title="The map of mathematics" />
              </Card.Header>

              <Card.Content>
                <p className="text-sm leading-5 text-gray-600">
                  Egestas elit dui scelerisque ut eu purus aliquam vitae
                  habitasse.
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

            <Card.Root>
              <Card.Header>
                <Card.Badge
                  text="Popular"
                  className="bg-blue-100 text-blue-800"
                />
                <Card.Title title="Design for how people think" />
              </Card.Header>

              <Card.Content>
                <p className="text-sm leading-5 text-gray-600">
                  Aliquam ut euismod condimentum elementum ultricies volutpat
                  sit non.
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

            <Card.Root className="hidden sm:block">
              <Card.Header>
                <Card.Badge
                  text="New"
                  className="bg-green-100 text-green-800"
                />
                <Card.Title title="International & commercial law" />
              </Card.Header>

              <Card.Content>
                <p className="text-sm leading-5 text-gray-600">
                  Molestie integer eu arcu, mauris bibendum rhoncus imperdiet
                  dui.
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
          </ul>
        </div>
      </div>
    </section>
  )
}
