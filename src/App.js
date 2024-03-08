import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

import { useEffect } from "react";
import AnalyticsSection from "./components/AnalyticsSection";
import Efficiency from "./components/EfficiencySection";
import NavBar from "./components/Header";
import HeroBanner from "./components/HeroSection";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <NavBar />
      <HeroBanner />
      <AnalyticsSection />
      <Efficiency />
    </div>
  );
}

export default App;
