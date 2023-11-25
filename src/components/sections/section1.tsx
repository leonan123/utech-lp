import { FiPlayCircle } from 'react-icons/fi'
import { Button } from '../button'

export function Section1() {
  return (
    <section className="mx-4 grid grid-cols-1 items-center gap-20 py-20 md:container md:mx-auto md:grid-cols-2">
      <div className="space-y-8">
        <div>
          <h1 className="text-7xl font-extrabold text-blue-900">
            <span className="relative">
              Teach
              <img
                src="/images/underlined-lg.svg"
                alt=""
                className="absolute -bottom-0.5 right-0 -z-10"
              />
            </span>{' '}
            students worldwide
          </h1>
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

        <div className="pt-16">
          <ul className="flex flex-wrap items-center gap-12">
            <li className="flex-1 text-gray-600 md:max-w-[135px]">
              Trusted by <br />
              leading companies
            </li>
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
