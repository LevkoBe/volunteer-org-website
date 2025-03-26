import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ActivitiesSection from "./components/ActivitiesSection";
import EventsSection from "./components/EventsSection";
import GallerySection from "./components/Gallery";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ActivitiesSection />
        <EventsSection />
        <GallerySection />
      </main>
    </>
  );
};

export default App;
