import { CheckIcon, XIcon } from "lucide-react";
import React from "react";
import { Separator } from "../../../../components/ui/separator";

export const FrameWrapper = (): JSX.Element => {
  // LinkedIn features data
  const linkedinFeatures = [
    "Broad, global, often impersonal",
    "Focused on content & personal branding",
    "Minimal visibility for tier 2/3 colleges",
    "Generic event and networking tools",
    "Many connections, low relevance",
  ];

  // MeetKats features data
  const meetkatsFeatures = [
    "Local, focused, deeply meaningful",
    "Focused on career growth & connections",
    "Built with tier 2/3 users in mind",
    "Smart tools for curated events",
    "Fewer connections, high relevance",
  ];

  return (
    <section className="relative w-full py-20 bg-[#e2ecda]">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-semibold text-black text-center tracking-[-1.20px] mb-16 font-['Inter',Helvetica]">
          LinkedIn vs MeetKats
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-start gap-8 relative">
          {/* LinkedIn Column */}
          <div className="flex-1">
            <h3 className="text-[40px] font-medium text-[#353333] text-center tracking-[-0.80px] mb-12 font-['Poppins',Helvetica]">
              LinkedIn
            </h3>
            <div className="space-y-[62px]">
              {linkedinFeatures.map((feature, index) => (
                <div
                  key={`linkedin-${index}`}
                  className="flex items-start gap-[52px]"
                >
                  <div className="relative w-8 h-8 flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                      <XIcon className="w-[25px] h-[26px] text-red-500" />
                    </div>
                  </div>
                  <p className="font-medium text-[#191a15] text-lg leading-[30px] font-['Inter',Helvetica]">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Separator */}
          <Separator orientation="vertical" className="h-[416px] mx-4" />

          {/* MeetKats Column */}
          <div className="flex-1">
            <h3 className="text-[40px] font-medium text-[#353333] text-center tracking-[-0.80px] mb-12 font-['Poppins',Helvetica]">
              MeetKats
            </h3>
            <div className="space-y-[62px]">
              {meetkatsFeatures.map((feature, index) => (
                <div
                  key={`meetkats-${index}`}
                  className="flex items-start gap-[52px]"
                >
                  <div className="relative w-8 h-8 flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                      <CheckIcon className="w-[25px] h-[26px] text-white" />
                    </div>
                  </div>
                  <p className="font-medium text-[#191a15] text-lg leading-[30px] font-['Inter',Helvetica]">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
