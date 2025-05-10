import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

// Testimonial data for mapping
const testimonials = [
  {
    id: 1,
    name: "Albert Flores",
    role: "Video editor",
    bgColor: "#1f1933",
    textColor: "white",
    testimonial:
      "very imprssive video editing tool have ever seen. it has so many awesome features to a video like pro. i have enjoy a lot while making my youtube channal video. really imoressive video editing tool for me.",
    hasReadMore: false,
    readMoreColor: "",
    profileImage: "/group-4.png",
    profileBgColor: "transparent",
  },
  {
    id: 2,
    name: "Mr. Jan",
    role: "FOUNDER; STRATEGY & FINANCE",
    bgColor: "white",
    textColor: "#565656",
    testimonial:
      "very imprssive video editing tool have ever seen. it has so many awesome features to a video like pro. i have enjoy a lot while making my youtube channal video. really imoressive video...",
    hasReadMore: true,
    readMoreColor: "#ffa26d",
    profileImage: "/mask-group.png",
    profileBgColor: "#ffcc00",
  },
  {
    id: 3,
    name: "Denise",
    role: "VIDEO EDITOR",
    bgColor: "white",
    textColor: "#565656",
    testimonial:
      "very imprssive video editing tool have ever seen. it has so many awesome features to a video like pro. i have enjoy a lot while making my youtube channal video. really imoressive video...",
    hasReadMore: true,
    readMoreColor: "#fe7700",
    profileImage: "/mask-group-1.png",
    profileBgColor: "#fe7700",
  },
];

export const Frame = (): JSX.Element => {
  return (
    <section className="relative w-full py-16 bg-[#fff7f4]">
      <div className="container mx-auto px-4">
        {/* Headline */}
        <div className="max-w-[819px] mx-auto mb-12">
          <h1 className="font-['Helvetica-Regular',Helvetica] text-[#111019] text-5xl text-center tracking-[-2.07px] leading-[63px]">
            More than 10,000 students across 200 colleges choose MeetKats!
          </h1>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mb-20">
          <Button className="h-[67px] w-[293px] bg-softgreen hover:text-dark-green text-black text-[31.2px] tracking-[-0.62px] leading-[31.2px] rounded-[18.73px] border-[1.56px] border-solid border-[#9abe80] font-['Inter',Helvetica] font-medium hover:bg-softgreen/90">
            Get Started Now
          </Button>
        </div>

        {/* Testimonials Section */}
        <div className="max-w-[1649px] mx-auto">
          {/* Section Title */}
          <div className="mb-16 text-center relative">
            <h2 className="font-['Space_Grotesk',Helvetica] flex-auto font-bold text-black text-[55px] tracking-[-2.75px] leading-[63.6px] max-w-[582px] mx-auto">
              Few Words About Our Platform
            </h2>
            <img
              className="w-[50px] h-[54px] mx-auto mt-4"
              alt="Decorative element"
              src="/group-1000004351.png"
            />
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className={`rounded-[15px] border-${testimonial.id === 1 ? "none" : "[1.16px] border-[#ededed]"}`}
                style={{ backgroundColor: testimonial.bgColor }}
              >
                <CardContent className="p-0">
                  <div
                    className={`relative p-10 h-full ${testimonial.id === 1 ? "h-[460px]" : "h-[340px]"}`}
                  >
                    {/* Profile Image */}
                    {testimonial.id === 1 ? (
                      <div className="w-[69px] h-[69px]">
                        <div className="relative w-[60px] h-[50px] top-2.5 left-1 bg-[url(/group-4.png)] bg-[100%_100%]" />
                      </div>
                    ) : (
                      <div
                        className={`w-[115px] h-[115px] rounded-full bg-[${testimonial.profileBgColor}] bg-[url(${testimonial.profileImage})] bg-[100%_100%]`}
                      />
                    )}

                    {/* Name and Role - Different styling for first card */}
                    {testimonial.id === 1 ? (
                      <div className="mt-[270px]">
                        <div className="font-['Space_Grotesk',Helvetica] font-medium text-white text-2xl">
                          {testimonial.name}
                        </div>
                        <div className="font-['Space_Grotesk',Helvetica] font-normal text-white text-base mt-2">
                          {testimonial.role}
                        </div>
                      </div>
                    ) : (
                      <div className="ml-[140px] -mt-[90px]">
                        <div
                          className={`font-['Gilroy-Bold-Bold',Helvetica] font-bold text-[#22272e] text-[23px] leading-[25px]`}
                        >
                          {testimonial.name}
                        </div>
                        <div className="font-['Space_Grotesk',Helvetica] font-bold text-[#22272e] text-sm tracking-[3.5px] leading-[15px] mt-2">
                          {testimonial.role}
                        </div>
                      </div>
                    )}

                    {/* Testimonial Text */}
                    <div
                      className={`font-['Space_Grotesk',Helvetica] font-normal text-${testimonial.textColor} text-lg leading-[29.6px] ${testimonial.id === 1 ? "mt-4" : "mt-16"}`}
                    >
                      {testimonial.testimonial}
                      {testimonial.hasReadMore && (
                        <span
                          className={`font-bold text-[${testimonial.readMoreColor}] underline`}
                        >
                          read more
                        </span>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex items-center justify-center gap-[15px] mt-10">
            <div className="w-3.5 h-[5px] bg-[#dfdfdf] rounded-lg"></div>
            <div className="w-3.5 h-[5px] bg-[#dfdfdf] rounded-lg"></div>
            <div className="w-[39px] h-[5px] bg-[#fe9171] rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
