import {HowItWorksSection} from "./sections/HowitWorks/howitworks";
import { ElementFaq } from "./sections/ElementFaq";
import { FooterBlock } from "./sections/FooterBlock";
import { Frame } from "./sections/Frame";
import { FrameWrapper } from "./sections/FrameWrapper";
import { FeatureCards } from "./sections/Cards/Cards";
import HeroSection from "./sections/HeroSection/Herosection";
import Navbar from "./sections/Navbar/Navbar";

export const BhoomiLandingPage = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-full max-w-[1440px] relative">
        {/* Header and Navigation */}
        <Navbar/>

        {/* Hero Section */}
        
        <HeroSection />

        {/* What MeetKats Can Offer Section */}
        <section id="features" className="mt-40 px-8">
          <h2 className="[font-family:'Inter',Helvetica] font-semibold text-black text-6xl tracking-[-1.20px] text-center mb-16">
            What MeetKats Can Offer
          </h2>

          {/* Feature Cards */}
          <div className="flex flex-wrap justify-center gap-8">
            <FeatureCards />
          </div>

          <FrameWrapper />
        </section>

        {/* How it Works Section */}
        <HowItWorksSection />

        {/* FAQ and Frame Section */}
        <section className="mt-32">
          <div className="relative">
            <Frame />
            <ElementFaq />
          </div>
        </section>

        {/* Footer Section */}
        <footer>
          <FooterBlock />
        </footer>
      </div>
    </div>
  );
};
