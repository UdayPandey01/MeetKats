import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

// Testimonial data with consistent structure and naming
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

// Separate testimonial card component for better code organization
const TestimonialCard = ({ testimonial }) => {
  const isFirstCard = testimonial.id === 1;
  
  return (
    <Card
      className={`rounded-xl overflow-hidden ${isFirstCard ? "border-0" : "border border-[#ededed]"}`}
      style={{ backgroundColor: testimonial.bgColor }}
    >
      <CardContent className="p-0">
        <div className={`relative p-6 md:p-8 lg:p-10 h-full flex flex-col ${isFirstCard ? "min-h-[340px] md:min-h-[400px]" : "min-h-[280px] md:min-h-[340px]"}`}>
          {/* Profile Image - Different styling for first card */}
          {isFirstCard ? (
            <div className="w-16 h-16 mb-auto">
              <div className="relative w-[60px] h-[50px] top-2.5 left-1 bg-cover bg-center" style={{ backgroundImage: `url(${testimonial.profileImage})` }} />
            </div>
          ) : (
            <div className="mb-4">
              <div 
                className="w-24 h-24 rounded-full bg-cover bg-center"
                style={{ 
                  backgroundColor: testimonial.profileBgColor,
                  backgroundImage: `url(${testimonial.profileImage})` 
                }}
              />
              <div className="mt-4 md:ml-28 md:-mt-16">
                <h3 className="font-bold text-xl text-[#22272e]">
                  {testimonial.name}
                </h3>
                <p className="font-bold text-sm tracking-widest mt-1 text-[#22272e]">
                  {testimonial.role}
                </p>
              </div>
            </div>
          )}

          {/* Testimonial Text */}
          <div className={`font-normal text-base md:text-lg leading-relaxed ${testimonial.textColor ? `text-${testimonial.textColor}` : ""} ${isFirstCard ? "mt-auto" : "mt-4 md:mt-8"}`}>
            {testimonial.testimonial}
            {testimonial.hasReadMore && (
              <span
                className="font-bold underline ml-1 cursor-pointer"
                style={{ color: testimonial.readMoreColor }}
              >
                read more
              </span>
            )}
          </div>

          {/* Name and Role for first card positioned at bottom */}
          {isFirstCard && (
            <div className="mt-4">
              <h3 className="font-medium text-xl text-white">
                {testimonial.name}
              </h3>
              <p className="font-normal text-base text-white mt-1">
                {testimonial.role}
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export const Frame = () => {
  return (
    <section className="relative w-full py-8 sm:py-12 md:py-16 bg-[#fff7f4]">
      <div className="container mx-auto px-4">
        {/* Headline */}
        <div className="max-w-4xl mx-auto mb-6 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-normal text-[#111019] leading-tight md:leading-[1.2] tracking-tight md:tracking-[-1px] lg:tracking-[-2px]">
            More than 10,000 students across 200 colleges choose MeetKats!
          </h1>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mb-10 md:mb-20">
          <Button className="h-12 md:h-16 lg:h-[67px] px-6 md:px-8 lg:w-[293px] bg-softgreen hover:text-dark-green text-black text-lg md:text-2xl lg:text-[31px] tracking-tight leading-tight rounded-xl md:rounded-[18px] border border-[#9abe80] font-medium hover:bg-softgreen/90 transition-colors">
            Get Started Now
          </Button>
        </div>

        {/* Testimonials Section */}
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="mb-8 md:mb-16 text-center relative">
            <h2 className="font-bold text-3xl md:text-4xl lg:text-[55px] text-black tracking-tight md:tracking-[-1.5px] lg:tracking-[-2.75px] leading-tight max-w-md md:max-w-lg mx-auto">
              Few Words About Our Platform
            </h2>
            <img
              className="w-10 h-10 md:w-[50px] md:h-[54px] mx-auto mt-4"
              alt="Decorative element"
              src="/group-1000004351.png"
            />
          </div>

          {/* Testimonial Cards - Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex items-center justify-center gap-3 mt-8 md:mt-10">
            <div className="w-3 h-1 bg-[#dfdfdf] rounded-lg"></div>
            <div className="w-3 h-1 bg-[#dfdfdf] rounded-lg"></div>
            <div className="w-8 md:w-10 h-1 bg-[#fe9171] rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};