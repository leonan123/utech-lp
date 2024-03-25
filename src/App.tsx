import { Footer } from './components/footer'
import { Header } from './components/header'
import { CoolFeatures } from './components/sections/cool-features'
import { Metrics } from './components/sections/metrics'
import { SectionSignUp } from './components/sections/section-sign-up'
import { Section1 } from './components/sections/section1'
import { Section2 } from './components/sections/section2'
import { Section3 } from './components/sections/section3'
import { Section4 } from './components/sections/section4'
import { Testimonials } from './components/sections/testimonials'

export function App() {
  return (
    <>
      <Header />

      <main className="overflow-hidden">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Metrics />
        <Testimonials />
        <CoolFeatures />
        <SectionSignUp />
      </main>

      <Footer />
    </>
  )
}

export default App
