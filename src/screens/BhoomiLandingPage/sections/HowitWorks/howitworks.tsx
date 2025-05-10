import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

// Define the steps data for better maintainability
const howItWorksSteps = [
  { title: "Create Account", color: "#FFE990" },
  { title: "Configure Profile", color: "#A4E387" },
  { title: "Upload Content", color: "#FF877B" },
  { title: "Share & Engage", color: "#66BEF0" }
];

// DivWrapper component from provided code
const DivWrapper = () => {
  // Define the step data for better maintainability
  const steps = [
    { number: "1", color: "#FFE990" },
    { number: "2", color: "#A4E387" },
    { number: "3", color: "#FF877B" },
    { number: "4", color: "#66BEF0" },
  ];

  return (
    <div className="w-full flex flex-col md:flex-row justify-between items-center md:gap-x-[230px] py-4">
      {steps.map((step, index) => (
        <div
          key={index}
          className="w-[96px] h-[96px] md:w-[116px] md:h-[116px] relative rounded-full flex items-center justify-center mb-4 md:mb-0"
          style={{ backgroundColor: step.color }}
        >
          <div className="font-['Inter',Helvetica] font-semibold text-4xl md:text-6xl tracking-[-1.20px] text-white">
            {step.number}
          </div>
        </div>
      ))}
    </div>
  );
};

// Card illustration component to maintain exact visuals
const CardIllustration = ({ index }:{index:any}) => {
  return (
    <div className="relative w-full h-full">
      <div className="absolute w-72 h-[277px] top-[67px] left-3.5 bg-[#f5fafa]" />
      <div className="absolute w-[283px] h-[309px] top-0 left-0">
        <div className="absolute w-[283px] h-[203px] top-0 left-0">
          <div className="absolute w-52 h-[93px] top-0 left-[75px]">
            <div className="absolute w-52 h-20 top-[13px] left-0">
              <div className="absolute w-52 h-[13px] top-0 left-0 bg-[#dbe5fa]" />
              <div className="absolute w-[189px] h-[13px] top-[22px] left-0 bg-[#dbe5fa]" />
              <div className="absolute w-[168px] h-[13px] top-11 left-0 bg-[#dbe5fa]" />
              <div className="absolute w-[148px] h-[13px] top-[66px] left-0 bg-[#dbe5fa]" />
            </div>
            <div className="absolute w-[105px] h-[49px] top-0 left-[51px]">
              <div className="absolute w-11 h-11 top-1 left-0 bg-[#54bd95] rounded-[22.09px] rotate-180" />
              <img
                className="absolute w-[52px] h-10 -top-px left-14"
                alt="Vector"
                src="/vector-37-1.svg"
              />
            </div>
          </div>
          <div className="absolute w-52 h-20 top-[119px] left-[75px]">
            <div className="absolute w-52 h-[13px] top-0 left-0 bg-[#dbe5fa]" />
            <div className="absolute w-[189px] h-[13px] top-[22px] left-0 bg-[#dbe5fa]" />
            <div className="absolute w-[168px] h-[13px] top-11 left-0 bg-[#dbe5fa]" />
            <div className="absolute w-[148px] h-[13px] top-[66px] left-0 bg-[#dbe5fa]" />
          </div>
          <div className="absolute w-14 h-20 top-[13px] left-0 bg-[#54bd95] rounded-[1.77px]" />
          <div className="absolute w-14 h-20 top-[124px] left-0 bg-[#0f8ce9] rounded-[1.77px]" />
        </div>
        <div className="absolute w-[283px] h-20 top-[230px] left-0">
          <div className="absolute w-[283px] h-20 top-0 left-0">
            <div className="absolute w-20 h-20 top-0 left-0 bg-[#dbe5fa] rounded-[39.77px]" />
            <div className="absolute w-20 h-20 top-0 left-[102px] bg-[#0f8ce9] rounded-[39.77px]" />
            <div className="absolute w-20 h-20 top-0 left-[203px] bg-[#54bd95] rounded-[39.77px]" />
          </div>
          <div className="absolute w-[42px] h-4 top-8 left-[222px]">
            <div className="absolute w-[7px] h-[7px] top-1 left-[35px] bg-white rounded-[3.53px]" />
            <div className="absolute w-[11px] h-[11px] top-[3px] left-5 bg-white rounded-[5.3px]" />
            <div className="absolute w-4 h-4 top-0 left-0 bg-white rounded-[7.95px]" />
          </div>
        </div>
      </div>
      {index === 1 && (
        <div className="absolute w-[207px] top-[94px] left-[41px] [font-family:'Inter',Helvetica] font-normal text-black text-2xl tracking-[0] leading-[30px]">
          screenshots
        </div>
      )}
    </div>
  );
};

// Combined Step and Card component for mobile view
const StepWithCard = ({ step, index }:{step:any,index:number}) => {
  return (
    <div className="flex flex-col items-center">
      {/* Step circle */}
      <div
        className="w-[96px] h-[96px] md:w-[116px] md:h-[116px] relative rounded-full flex items-center justify-center mb-4"
        style={{ backgroundColor: step.color }}
      >
        <div className="font-['Inter',Helvetica] font-semibold text-4xl md:text-6xl tracking-[-1.20px] text-white">
          {index + 1}
        </div>
      </div>
      
      {/* Step Title */}
      <h3 className="[font-family:'Inter',Helvetica] font-normal text-black text-xl md:text-2xl tracking-[-0.48px] mb-4">
        {step.title}
      </h3>
      
      {/* Card */}
      <Card
        className="w-full max-w-[322px] h-[380px] bg-[#f9f8fe] rounded-[17.67px] overflow-hidden mb-12"
      >
        <CardContent className="p-0">
          <div className="relative w-full h-full pt-[35px] pl-[19px]">
            <CardIllustration index={index} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export const HowItWorksSection = () => {
  return (
    <section className="mt-16 md:mt-24 lg:mt-32 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      {/* Section Title */}
      <h2 className="[font-family:'Inter',Helvetica] font-semibold text-black text-4xl md:text-5xl lg:text-6xl text-center tracking-[-1.20px] mb-8 md:mb-12 lg:mb-16">
        How it Works
      </h2>

      {/* For Desktop: Steps and Cards as separate sections */}
      <div className="hidden md:block">
        {/* Steps Indicator */}
        <div className="relative mt-8 md:mt-12 lg:mt-16">
          {/* Horizontal Separator */}
          <Separator className="absolute w-full max-w-4xl md:max-w-[800px] lg:max-w-[1099px] h-px top-[57px] left-1/2 transform -translate-x-1/2" />
          
          {/* Step Circles */}
          <div className="max-w-4xl md:max-w-[800px] lg:max-w-[1099px] mx-auto">
            <DivWrapper />
          </div>

          {/* Step Titles */}
          <div className="flex justify-between mt-8 md:mt-16 lg:mt-24 max-w-4xl md:max-w-[800px] lg:max-w-[1099px] mx-auto">
            {howItWorksSteps.map((step, index) => (
              <div key={index} className="w-[216px] text-center">
                <h3 className="[font-family:'Inter',Helvetica] font-normal text-black text-xl md:text-2xl tracking-[-0.48px]">
                  {step.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Step Cards */}
        <div className="flex flex-wrap md:flex-nowrap justify-between mt-8 md:mt-12 lg:mt-16 gap-4">
          {howItWorksSteps.map((_, index) => (
            <Card
              key={index}
              className="w-min md:w-[322px] h-[380px] bg-[#f9f8fe] rounded-[17.67px] overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="relative w-min h-full pt-[35px] ">
                  <CardIllustration index={index} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* For Mobile: Vertical stack with step and card together */}
      <div className="md:hidden">
        {howItWorksSteps.map((step, index) => (
          <StepWithCard key={index} step={step} index={index} />
        ))}
      </div>
    </section>
  );
};