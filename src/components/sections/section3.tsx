import { FiCheck, FiArrowRight } from 'react-icons/fi'
import { Button } from '../button'
import * as Card from '../card'

export function Section3() {
  return (
    <section className="mx-4 max-w-[1440px] py-20 md:mx-10 3xl:mx-auto">
      <div className="flex flex-wrap items-center justify-between text-blue-900">
        <div className="max-w-[544px] space-y-8">
          <h2 className="text-6xl font-extrabold">
            An{' '}
            <span className="relative">
              all-in-one{' '}
              <img
                src="/images/underlined-xl.svg"
                alt=""
                className="absolute -bottom-0.5 right-5 -z-10"
              />
            </span>{' '}
            app that makes it easier
          </h2>

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

        <div className="relative flex min-h-[546.968px] flex-col items-end">
          <img
            src="/images/blobGroup-2.svg"
            alt=""
            className="absolute -left-40 -top-12 -z-10"
          />

          <div className="z-10 aspect-video max-h-[391px] w-full max-w-[600px] bg-white">
            <div className="flex h-full w-full flex-col overflow-hidden rounded-2xl shadow-picture">
              <header className="bg-white px-4 pt-4">
                <div className="flex h-full w-full items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-600" />
                  <span className="h-2.5 w-2.5 rounded-full bg-orange-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
                </div>
              </header>

              <main className="flex-1 px-2 pb-2">
                <div className="h-full w-full rounded-e-2xl bg-[url('/images/video.svg')] bg-cover" />
              </main>
            </div>
          </div>

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

            <Card.Root>
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
