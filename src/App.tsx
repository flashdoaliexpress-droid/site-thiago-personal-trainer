import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { About } from "./components/About"
import { Method } from "./components/Method"
import { Testimonials } from "./components/Testimonials"
import { Institutional } from "./components/Institutional"
import { Plans } from "./components/Plans"
import { FinalCTA } from "./components/FinalCTA"
import { Footer } from "./components/Footer"

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Method />
      <Testimonials />
      <Institutional />
      <Plans />
      <FinalCTA />
      <Footer />
    </>
  )
}
