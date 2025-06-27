import gsap from "gsap"
import Navbar from "./components/navbar"
import Hero from "./sections/hero"
import { ScrollTrigger } from "gsap/all"
import About from "./sections/about"
import Flavor from "./sections/flavor"

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Flavor />
      <div className="h-dvh border-red-500" />
    </main>
  )
}

export default App