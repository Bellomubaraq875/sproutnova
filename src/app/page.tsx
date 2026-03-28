// app/page.tsx
import HeroSection from "./components/section/HeroSection"
import MissionSection from "./components/section/MissionSection"
import Problem from "./components/section/Problem"
import Newsletter from "./components/section/Newsletter"
import FeatureSection from "./components/section/FeatureSection"
import HowItWorks from "./components/section/HowItWorks"
import DashboardPreview from "./components/section/DashboardPreview"


export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <Problem/>
   
      <Newsletter />
      <FeatureSection/>
      <HowItWorks/>
      <DashboardPreview/>
      {/* <Newsletter/> */}
    </>
  );
}