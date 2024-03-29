import { Footer } from './components/footer'
import { Header } from './components/header'
import { CoolFeatures } from './components/sections/cool-features'
import { Metrics } from './components/sections/metrics'
import { SectionSignUp } from './components/sections/section-sign-up'
import { Hero } from './components/sections/hero'
import { ToolsInformation } from './components/sections/tools-information'
import { FeatureSection } from './components/sections/feature-section'
import { EngagementSection } from './components/sections/engagement-section'
import { Testimonials } from './components/sections/testimonials'

export function App() {
  return (
    <>
      <Header />

      <main className="overflow-hidden">
        <Hero />
        <ToolsInformation />
        <FeatureSection />
        <EngagementSection />
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
