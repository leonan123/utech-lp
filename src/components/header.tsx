import { FiChevronDown } from 'react-icons/fi'

export function Header() {
  return (
    <header className="flex min-h-[4.1875rem] items-center justify-between py-6 font-medium text-blue-900 md:container md:mx-auto">
      <nav className="flex items-center gap-12 px-2 py-3">
        <img src="/logo.svg" alt="" />

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
        <button>Log In</button>
        <button className="rounded-lg border-2 border-blue-900 px-7 py-3">
          Sign Up Now
        </button>
      </div>
    </header>
  )
}
