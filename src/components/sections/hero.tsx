import { FiPlayCircle } from 'react-icons/fi'
import { Button } from '../button'
import { Heading } from '../heading'

export function Hero() {
  return (
    <section className="mx-4 grid grid-cols-1 items-center gap-20 pb-20 pt-10 md:mx-10 md:max-w-[1440px] md:grid-cols-2 3xl:mx-auto">
      <div className="space-y-8">
        <div>
          <Heading>
            <span className="relative">
              Teach
              <img
                src="/images/underlined-lg.svg"
                alt=""
                className="absolute -bottom-0.5 right-0 -z-10"
              />
            </span>{' '}
            students worldwide
          </Heading>
        </div>
        <p className="max-w-[575px] text-2xl text-blue-900">
          Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa
          tincidunt viverra lectus pulvinar. Nunc ipsum est pellentesque turpis
          ultricies.
        </p>

        <div className="flex flex-wrap items-center gap-8">
          <Button>Sign Up Now</Button>
          <Button
            variant="noBorder"
            size="lg"
            className="flex items-center gap-4 text-blue-600 focus-visible:ring-blue-600"
          >
            <span>
              <FiPlayCircle className="h-6 w-6" />
            </span>
            <span>View Demo</span>
          </Button>
        </div>

        <div className="pt-8 sm:pt-16">
          <ul className="flex flex-wrap items-center gap-12 sm:flex-nowrap">
            <li className="flex-1 text-gray-600 md:max-w-[135px]">
              Trusted by <br className="hidden sm:block" />
              leading companies
            </li>

            <div className="flex flex-wrap items-center gap-9 sm:gap-12">
              <li>
                <img src="/images/company-1.svg" alt="" />
              </li>
              <li>
                <img src="/images/company-2.svg" alt="" />
              </li>
              <li>
                <img src="/images/company-3.svg" alt="" />
              </li>
              <li>
                <img src="/images/company-4.svg" alt="" />
              </li>
              <li>
                <img src="/images/company-5.svg" alt="" />
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div>
        <img
          src="/images/section1.svg"
          alt=""
          className="aspect-square object-contain"
        />
      </div>
    </section>
  )
}
