import { Hero } from "../components/Hero";
import SpecializedSolutions from "../components/SpecializedSolutions";
import { OurSolutions } from "../components/OurSolutions";
import { Industries } from "../components/Industries";
import { WhySTBM } from "../components/WhySTBM";
import { SuccessMetrics } from "../components/SuccessMetrics";
import { SuccessStory } from "../components/SuccessStory";
import { SolutionFinder } from "../components/SolutionFinder";
import { FeaturedEquipment } from "../components/FeaturedEquipment";
import { Testimonial } from "../components/Testimonial";
import { ResourcePreview } from "../components/ResourcePreview";
import { FinalCTA } from "../components/FinalCTA";

export function Home() {
  return (
    <>
      <Hero />
      <SpecializedSolutions />
      <OurSolutions />
      <Industries />
      <WhySTBM />
      <SuccessMetrics />
      <SuccessStory />
      <SolutionFinder />
      <FeaturedEquipment />
      <Testimonial />
      <ResourcePreview />
      <FinalCTA />
    </>
  );
}
