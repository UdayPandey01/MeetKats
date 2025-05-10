import { LinkedinIcon, TwitterIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const FooterBlock = (): JSX.Element => {
  const contactInfo = [
    { label: "Email: official@meetkats.com" },
    { label: "Phone: 555-567-8901" },
    { label: "Address: 1234 Main St\nBaker City, Xyz State 12345" },
  ];

  return (
    <div className="flex flex-col w-full items-start gap-2.5 px-[100px] py-0">
      <Card className="w-full border-none bg-softgreen rounded-[45px_45px_0px_0px] shadow-none">
        <CardContent className="flex flex-col items-start gap-[50px] pt-[55px] pb-[50px] px-[60px]">
          <div className="flex w-[140px] items-center gap-[155px]">
            <div className="inline-flex items-start gap-5">
              <div className="relative w-[30px] h-[30px] bg-white rounded-[15px] flex items-center justify-center">
                <LinkedinIcon className="w-[15px] h-[15px]" />
              </div>

              <img
                className="relative w-[30px] h-[30px]"
                alt="Social icon"
                src="/social-icon.svg"
              />

              <div className="relative w-[30px] h-[30px] bg-white rounded-[15px] flex items-center justify-center">
                <TwitterIcon className="w-[18px] h-3.5" />
              </div>
            </div>
          </div>

          <div className="inline-flex flex-col items-start gap-[66px]">
            <div className="inline-flex items-start gap-[154px]">
              <div className="inline-flex flex-col items-start gap-[27px]">
                <div className="inline-flex flex-col items-start">
                  <div className="inline-flex flex-col items-start gap-2.5 px-[7px] py-0 bg-base-green rounded-[7px]">
                    <div className="relative w-fit mt-[-1.00px] font-h-4 font-[number:var(--h-4-font-weight)] text-black text-[length:var(--h-4-font-size)] tracking-[var(--h-4-letter-spacing)] leading-[var(--h-4-line-height)] [font-style:var(--h-4-font-style)]">
                      Contact us:
                    </div>
                  </div>
                </div>

                <div className="inline-flex flex-col items-start gap-5">
                  {contactInfo.map((item, index) => (
                    <div
                      key={index}
                      className="relative w-fit font-p font-[number:var(--p-font-weight)] text-dark-green text-[length:var(--p-font-size)] tracking-[var(--p-letter-spacing)] leading-[var(--p-line-height)] [font-style:var(--p-font-style)]"
                    >
                      {item.label.includes("\n") ? (
                        <>
                          {item.label.split("\n")[0]}
                          <br />
                          {item.label.split("\n")[1]}
                        </>
                      ) : (
                        item.label
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="inline-flex flex-col items-start gap-[50px] w-full">
            <Separator className="w-full h-px bg-dark-green/20" />

            <div className="inline-flex items-start gap-10">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Space_Grotesk',Helvetica] font-normal text-dark-green text-lg tracking-[0] leading-7 whitespace-nowrap">
                © 2023 Meetkats. All Rights Reserved.
              </div>

              <div className="relative w-fit mt-[-1.00px] [font-family:'Space_Grotesk',Helvetica] font-normal text-dark-green text-lg tracking-[0] leading-7 underline whitespace-nowrap">
                Privacy Policy
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
