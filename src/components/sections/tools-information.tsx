import { Heading } from '../heading'
import * as DesktopScreen from '../desktop-screen'

export function ToolsInformation() {
  return (
    <section className="bg-gray-100">
      <div className="relative mx-4 space-y-7 py-20 md:mx-10 md:max-w-[1440px] md:space-y-20 3xl:mx-auto">
        <img
          src="/images/blobGroup-1.svg"
          className="absolute -left-14 top-80 max-h-[206px] md:top-[27rem] md:block md:max-h-[360px] lg:top-96 lg:max-h-none"
          alt=""
        />

        <img
          src="/images/blobGroup.svg"
          className="absolute right-0 top-32 max-h-[371px] max-w-[371px] md:max-h-none"
          alt=""
        />

        <div className="relative z-10 flex flex-col items-center justify-center gap-6 text-blue-900">
          <Heading as="h2" size="heading2">
            All the{' '}
            <span className="relative">
              tools{' '}
              <img
                src="/images/underlined-lg.svg"
                className="absolute bottom-0.5 right-1 -z-10 max-w-[5rem] sm:right-4 sm:max-w-[8rem]"
                alt=""
              />
            </span>{' '}
            that you need
          </Heading>

          <p className="max-w-[830px] text-xl leading-6 md:text-center md:leading-9">
            Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
            suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
            amet, dui sit suspendisse.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <DesktopScreen.Root className="max-w-[1280px]">
            <DesktopScreen.Header>
              <DesktopScreen.Navigation host="utech.com" />
            </DesktopScreen.Header>

            <DesktopScreen.Content className="bg-[url('/images/screen-picture.svg')]" />
          </DesktopScreen.Root>

          <div className="z-10 flex flex-col">
            <img
              src="/images/lines.svg"
              alt=""
              className="mx-auto hidden sm:block"
            />
            <img
              src="/images/single-line.svg"
              alt=""
              className="mx-auto block sm:hidden"
            />

            <div className="ml-[calc(100vw_-_calc(100vw-(377px-2rem))_/2)] min-w-[377px] max-w-[1160px] sm:ml-0">
              <ul className="flex items-center justify-between gap-4 overflow-hidden">
                <li className="flex h-16 w-16 items-center justify-center rounded-xl border border-gray-300 bg-white">
                  <img src="/images/thumbnails/classroom.svg" alt="" />
                </li>

                <li className="flex h-16 w-16 items-center justify-center rounded-xl border-4 border-orange-400 bg-white">
                  <img src="/images/thumbnails/drive.svg" alt="" />
                </li>

                <li className="flex h-16 w-16 items-center justify-center rounded-xl border border-gray-300 bg-white">
                  <img src="/images/thumbnails/google.svg" alt="" />
                </li>

                <li className="flex h-16 w-16 items-center justify-center rounded-xl border border-gray-300 bg-white">
                  <img src="/images/thumbnails/google.svg" alt="" />
                </li>

                <li className="flex h-16 w-16 items-center justify-center rounded-xl border border-gray-300 bg-white">
                  <img src="/images/thumbnails/photodoto.svg" alt="" />
                </li>

                <li className="flex h-16 w-16 items-center justify-center rounded-xl border border-gray-300 bg-white">
                  <img src="/images/thumbnails/infinity.svg" alt="" />
                </li>

                <li className="flex h-16 w-16 items-center justify-center rounded-xl border border-gray-300 bg-white">
                  <img src="/images/thumbnails/calendar.svg" alt="" />
                </li>

                <li className="flex h-16 w-16 items-center justify-center rounded-xl border border-gray-300 bg-white">
                  <img src="/images/thumbnails/buzzfeed.svg" alt="" />
                </li>

                <li className="flex h-16 w-16 items-center justify-center rounded-xl border border-gray-300 bg-white">
                  <img src="/images/thumbnails/wifi.svg" alt="" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
