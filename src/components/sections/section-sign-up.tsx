import { Button } from '../button'
import { Heading } from '../heading'

export function SectionSignUp() {
  return (
    <section className="grid min-h-[779px] place-items-center bg-yellow-400 bg-[url('/images/bg-section-sign-up-mobile.png')] bg-contain bg-center bg-no-repeat py-20 lg:bg-[url('/images/bg-section-sign-up.png')]">
      <div className="mx-4 space-y-8 text-center md:mx-10 md:max-w-[1440px] 3xl:mx-auto">
        <Heading as="h2" size="heading2">
          Join a world of learning
        </Heading>

        <p className="mx-auto max-w-[600px] text-base leading-8 text-blue-900 sm:text-xl">
          Malesuada ut aliquam at ac est nisi, interdum etiam dignissim. Risus
          elit et fringilla habitant ut facilisi.
        </p>

        <Button variant="filled" size="lg" className="px-12">
          Sign Up Now
        </Button>
      </div>
    </section>
  )
}
