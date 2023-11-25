import { Header } from './components/header'
import { Section1 } from './components/sections/section1'
import { Section2 } from './components/sections/section2'
import { Section3 } from './components/sections/section3'

export function App() {
  return (
    <>
      <Header />

      <main>
        <Section1 />
        <Section2 />
        <Section3 />
      </main>
    </>
  )
}

export default App
