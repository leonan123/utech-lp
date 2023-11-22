import { Header } from './components/header'
import { FiPlayCircle } from 'react-icons/fi'

export function App() {
  return (
    <>
      <Header />

      <main>
        <section className="grid grid-cols-2 items-center gap-20 py-20 md:container md:mx-auto">
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
              Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin
              massa tincidunt viverra lectus pulvinar. Nunc ipsum est
              pellentesque turpis ultricies.
            </p>

            <div className="flex items-center gap-8">
              <button className="rounded-lg bg-orange-600 px-12 py-5 text-2xl font-bold leading-6 text-white">
                Sign Up Now
              </button>
              <button className="flex items-center gap-4 px-2 py-4 text-xl font-medium leading-6 text-blue-600">
                <span>
                  <FiPlayCircle className="h-6 w-6" />
                </span>
                <span>View Demo</span>
              </button>
            </div>

            <div className="pt-16">
              <ul className="flex items-center gap-12">
                <li className="text-blue-gray-600 max-w-[135px]">
                  Trusted by leading companies
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
      </main>
    </>
  )
}

export default App
