import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const Cards = (): JSX.Element => {
  const featureCards = [
    {
      id: 1,
      title: "Micro Networking",
      description: "Connect with peers from your college, city, or field.",
      icon: "/twemoji-link.svg",
      iconAlt: "Twemoji link",
      bgColor: "bg-[#a4dbb761]",
      iconWidth: "w-[89px]",
      iconHeight: "h-[94px]",
    },
    {
      id: 2,
      title: "Event Hosting & Discovery",
      description: "Host and manage professional events with ease",
      icon: "/mdi-event-search.svg",
      iconAlt: "Mdi event search",
      bgColor: "bg-[#e3f3ff]",
      iconWidth: "w-[67px]",
      iconHeight: "h-[67px]",
    },
    {
      id: 3,
      title: "Curated Connections",
      description: "Get matched with like-minded folks.",
      icon: "/vector-45.svg",
      iconAlt: "Vector",
      bgColor: "bg-[#fee85f42]",
      iconWidth: "w-[66px]",
      iconHeight: "h-[55px]",
    },
  ];

  return (
    <div className="flex items-start gap-[30px] py-8 w-full">
      {featureCards.map((card) => (
        <Card
          key={card.id}
          className={`${card.bgColor} border-none rounded-xl flex-1`}
        >
          <CardContent className="flex flex-col items-center justify-center p-6 h-[209px]">
            <img
              className={`${card.iconWidth} ${card.iconHeight} mb-4`}
              alt={card.iconAlt}
              src={card.icon}
            />
            <h3 className="font-bold text-2xl text-[#2b2b2b] text-center mb-2 leading-[26px]">
              {card.title}
            </h3>
            <p className="font-medium text-[17px] text-[#2b2b2b] text-center leading-[21px]">
              {card.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
