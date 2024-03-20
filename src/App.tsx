import { Header } from './components/header'
import { Section1 } from './components/sections/section1'
import { Section2 } from './components/sections/section2'
import { Section3 } from './components/sections/section3'
import { Section4 } from './components/sections/section4'

export function App() {
  return (
    <>
      <Header />

      <main className="overflow-hidden">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </main>
    </>
  )
}

export default App
