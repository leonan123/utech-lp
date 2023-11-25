import { FiChevronDown } from 'react-icons/fi'
import { Button } from './button'

export function Header() {
  return (
    <header className="mx-4 flex min-h-[4.1875rem] items-center justify-between py-6 text-blue-900 md:container first-line:font-medium md:mx-auto">
      <nav className="flex items-center gap-12 px-2 py-3">
        <a href="#">
          <img src="/logo.svg" alt="" />
        </a>

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
    </header>
  )
}
