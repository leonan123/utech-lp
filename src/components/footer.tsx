import { FiArrowRight } from 'react-icons/fi'
import {
  companyLinks,
  productLinks,
  resourcesLinks,
  solutionLinks,
  supportLinks,
} from '../constants'
import { Badge } from './card'

import { PiGlobeLight } from 'react-icons/pi'
import { BiEuro, BiUniversalAccess } from 'react-icons/bi'

export function Footer() {
  return (
    <footer className="bg-blue-900 text-gray-200">
      <div className="mx-4 space-y-8 py-20 md:mx-10 md:max-w-[1440px] 3xl:mx-auto">
        <nav className="grid grid-cols-2 gap-12 lg:grid-cols-6">
          <div>
            <a href="#">
              <img src="/logo.svg" alt="" />
            </a>
          </div>

          <div>
            <h4 className="mb-5 text-lg font-bold tracking-wider">Product</h4>
            <ul className="space-y-5">
              {productLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="font-light tracking-wider hover:opacity-80"
                  >
                    {link.text}

                    {link.badge && (
                      <Badge text={link.badge.text} className="ml-2" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-lg font-bold tracking-wider">Solutions</h4>
            <ul className="space-y-5">
              {solutionLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="font-light tracking-wider hover:opacity-80"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-lg font-bold tracking-wider">Resources</h4>
            <ul className="space-y-5">
              {resourcesLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="font-light tracking-wider hover:opacity-80"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-lg font-bold tracking-wider">Support</h4>
            <ul className="space-y-5">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="font-light tracking-wider hover:opacity-80"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-lg font-bold tracking-wider">Company</h4>
            <ul className="space-y-5">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 font-light tracking-wider hover:opacity-80"
                  >
                    {link.text}

                    {link.text.toLowerCase().includes('demo') && (
                      <FiArrowRight className="size-5" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-gray-200/20 py-9">
          <p className="text-center text-sm">
            uteach @ 2023. All rights reserved.
          </p>

          <ul className="flex items-center gap-6">
            <li>
              <a href="#" className="hover:opacity-80">
                Terms
              </a>
            </li>

            <li>
              <a href="#" className="hover:opacity-80">
                Privacy
              </a>
            </li>

            <li>
              <a href="#" className="hover:opacity-80">
                Contact
              </a>
            </li>

            <li>
              <a href="#" className="flex items-center gap-2 hover:opacity-80">
                <PiGlobeLight className="size-7" />{' '}
                <span className="pt-0.5">EN</span>
              </a>
            </li>

            <li>
              <a href="#" className="flex items-center gap-2 hover:opacity-80">
                <BiEuro className="size-7" />{' '}
                <span className="pt-0.5">EUR</span>
              </a>
            </li>

            <li>
              <a href="#" className="flex items-center gap-2 hover:opacity-80">
                <BiUniversalAccess className="size-7" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
