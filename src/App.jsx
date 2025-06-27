import gsap from "gsap";
import Navbar from "./components/navbar";
import Hero from "./sections/hero";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import About from "./sections/about";
import Flavor from "./sections/flavor";
import { useGSAP } from "@gsap/react";
import Nutrition from "./sections/nutrition";
import Benefit from "./sections/benefit";


gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });

  return (
    <main>
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Hero />
          <About />
          <Flavor />
          <Nutrition />
          <Benefit />
          <div className="h-dvh border-red-500" />
        </div>
      </div>
    </main>
  );
};

export default App;
