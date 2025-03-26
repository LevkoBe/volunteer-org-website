import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ActivitiesSection from "./components/ActivitiesSection";
import EventsSection from "./components/EventsSection";
import GallerySection from "./components/Gallery";
import Join from "./components/Join";
import Resources from "./components/Resources";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <main>
        <AboutSection />
        <ActivitiesSection />
        <EventsSection />
        <GallerySection />
        <Join />
        <Resources />
        <FAQ />
      </main>
      <Footer />
    </>
  );
};

export default App;
