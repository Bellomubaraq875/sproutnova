// app/page.tsx
import HeroSection from "./components/section/HeroSection"
import MissionSection from "./components/section/MissionSection"
import StoriesSection from "./components/section/StoriesSection"
import StatSection from "./components/section/StatSection"
import NewsletterSection from "./components/section/NewsletterSection"
import GiveSection from "./components/section/Newsletter"

import CTASection from "./components/section/CTAsection"
import Gallery from "./components/section/Gallery"
import Problem from "./components/section/Problem"
import Newsletter from "./components/section/Newsletter"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <Problem/>
      <StatSection/>
      <CTASection/>
      <StoriesSection />
      <NewsletterSection />
      <Gallery/>
      {/* <GiveSection /> */}
      <Newsletter/>
    </>
  );
}