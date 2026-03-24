// app/page.tsx
import HeroSection from "./components/section/HeroSection"
import MissionSection from "./components/section/MissionSection"

import Problem from "./components/section/Problem"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <Problem/>
     
    </>
  );
}