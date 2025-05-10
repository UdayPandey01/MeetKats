import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { LinkIcon, SearchIcon } from "lucide-react";

interface CardItem {
  title: string;
  description: string;
  bgColor?: string;
  icon?: string;
  iconAlt?: string;
  iconJsx?: React.ReactNode;
  iconClassName?: string;
}

export const FeatureCards = (): JSX.Element => {
  const cards: CardItem[] = [
    {
      title: "Micro Networking",
      description: "Connect with peers from your college, city, or field.",
      icon: "/twemoji-link.svg",
      iconAlt: "Twemoji link",
      bgColor: "bg-[#a4dbb761]",
      iconClassName: "w-14 h-14",
    },
    {
      title: "Event Hosting & Discovery",
      description: "Host and manage professional events with ease",
      icon: "/mdi-event-search.svg",
      iconAlt: "Mdi event search",
      bgColor: "bg-[#e3f3ff]",
      iconClassName: "w-12 h-12",
    },
    {
      title: "Curated Connections",
      description: "Get matched with like-minded folks.",
      icon: "/vector-45.svg",
      iconAlt: "Vector",
      bgColor: "bg-[#fee85f42]",
      iconClassName: "w-12 h-12",
    },
    {
      title: "Real Impact",
      description: "Not just numbers. Build a meaningful network that helps you move forward.",
      icon: "/carbon-growth.svg",
      iconAlt: "Carbon growth",
      bgColor: "bg-[#fee1e4]",
      iconClassName: "w-14 h-14",
    },
    {
      title: "Lucide Icon Example",
      description: "Using JSX-based icon from a library.",
      iconJsx: <LinkIcon className="w-6 h-6" />,
      bgColor: "bg-[#e0f7e9]",
    },
    {
      title: "Search Features",
      description: "Easily find events and connections.",
      iconJsx: <SearchIcon className="w-6 h-6" />,
      bgColor: "bg-[#f0eaff]",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 py-12 w-full">
      {cards.map((card, index) => (
        <Card
          key={index}
          className={`w-[272px] ${card.bgColor ?? "bg-white"} border-none rounded-2xl shadow-md transition-transform hover:scale-105`}
        >
          <CardContent className="flex flex-col items-center justify-center p-6 h-[250px] text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow mb-4">
              {card.icon && (
                <img
                  src={card.icon}
                  alt={card.iconAlt || "icon"}
                  className={`${card.iconClassName || "w-10 h-10"}`}
                />
              )}
              {card.iconJsx && card.iconJsx}
            </div>
            <h3 className="font-semibold text-xl text-[#2b2b2b] leading-snug">
              {card.title}
            </h3>
            <p className="text-sm text-[#2b2b2b] mt-2">
              {card.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
