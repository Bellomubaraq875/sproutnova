// app/page.tsx
import HeroSection from "./components/section/HeroSection"
import MissionSection from "./components/section/MissionSection"
import Problem from "./components/section/Problem"
import Newsletter from "./components/section/Newsletter"
import FeatureSection from "./components/section/FeatureSection"
import HowItWorks from "./components/section/HowItWorks"
import DashboardPreview from "./components/section/DashboardPreview"
import CTA from "./components/section/CTA"
import Solution from "./components/section/Solution"


export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <Problem/>
      <Solution/>
      {/* <Newsletter /> */}
      <FeatureSection/>
      <HowItWorks/>
      <DashboardPreview/>
      <CTA/>
      <Newsletter/>
    </>
  );
}