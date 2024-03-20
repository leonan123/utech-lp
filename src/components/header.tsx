import { FiChevronDown, FiMenu } from 'react-icons/fi'
import { Button } from './button'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

export function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  function handleToggleMenu() {
    setMenuIsOpen(!menuIsOpen)
  }

  return (
    <header className="mx-4 flex min-h-[4.1875rem] items-center justify-between py-6 text-blue-900 md:mx-10 md:max-w-[1440px] 3xl:mx-auto">
      <a href="#" className="mr-12">
        <img src="/logo.svg" alt="" />
      </a>

      <div
        className={twMerge(
          'absolute right-0 top-[calc(4.1875rem_+_1.5rem)] z-10 w-full flex-1 overflow-hidden border-b-2 border-blue-900 bg-white lg:relative lg:top-0 lg:animate-none lg:border-none lg:bg-none lg:shadow-none',
          menuIsOpen ? 'block animate-fade-in-down' : 'animate-fade-in-up',
        )}
      >
        <div className="mx-4 flex w-full flex-col items-start justify-between gap-12 py-3 md:container md:mx-auto lg:flex-row lg:items-center">
          <nav className="flex flex-col items-start gap-8 px-2 py-3 lg:flex-row lg:items-center lg:gap-12">
            <a href="#" className="hover:opacity-80">
              Products
            </a>

            <a href="#" className="hover:opacity-80">
              Solutions
            </a>

            <a href="#" className="hover:opacity-80">
              Pricing
            </a>

            <a href="#" className="flex items-center gap-2 hover:opacity-80">
              <span>Resources</span>
              <span className="text-lg">
                <FiChevronDown />
              </span>
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <Button
              variant="noBorder"
              size="lg"
              className="py-3 text-base font-medium text-blue-900"
            >
              Log In
            </Button>
            <Button
              variant="outline"
              className="px-7 py-3 text-base font-medium text-blue-900"
            >
              Sign Up Now
            </Button>
          </div>
        </div>
      </div>

      <div className="block lg:hidden">
        <Button
          variant="noBorder"
          size="lg"
          className="text-blue-900"
          onClick={handleToggleMenu}
        >
          <FiMenu width={24} height={24} />
        </Button>
      </div>
    </header>
  )
}
