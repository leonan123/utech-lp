import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

export function Section2() {
  return (
    <section className="bg-gray-100">
      <div className="relative space-y-7 px-4 py-20 md:container md:mx-auto md:space-y-20 md:px-0">
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
          <h2 className="text-6xl font-extrabold">
            All the{' '}
            <span className="relative">
              tools{' '}
              <img
                src="/images/underlined-lg.svg"
                className="absolute bottom-0.5 right-1 -z-10 max-w-[8rem]  md:right-4"
                alt=""
              />
            </span>{' '}
            that you need
          </h2>
          <p className="max-w-[830px] text-xl leading-6 md:text-center md:leading-9">
            Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
            suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
            amet, dui sit suspendisse.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative z-10 aspect-video max-h-[640px] min-h-[226px] w-full px-4 md:px-20">
            <div className="flex h-full w-full flex-col overflow-hidden rounded-lg shadow-picture">
              <header className="flex min-h-[41px] items-center justify-between gap-8 bg-white px-4 py-2">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-600" />
                  <span className="h-3 w-3 rounded-full bg-orange-400" />
                  <span className="h-3 w-3 rounded-full bg-green-500" />
                </div>

                <div className="max-w-[494.903px] flex-1 rounded bg-gray-100 py-0.5 text-center">
                  <span className="select-none text-xs text-gray-400">
                    uteach.com
                  </span>
                </div>

                <div className="flex items-center justify-center gap-1.5">
                  <span>
                    <FiChevronLeft className="h-6 w-6 text-gray-400" />
                  </span>

                  <span>
                    <FiChevronRight className="h-6 w-6 text-gray-600" />
                  </span>
                </div>
              </header>

              <main className="flex-1 bg-[url('/images/screen-picture.svg')] bg-cover" />
            </div>
          </div>

          <div className="z-10 flex flex-col">
            <img src="/images/lines.svg" alt="" className="mx-auto" />

            <div className="min-w-[377px] max-w-[1160px] pl-[calc(100vw-(100vw-377px)/2)] sm:pl-0">
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
