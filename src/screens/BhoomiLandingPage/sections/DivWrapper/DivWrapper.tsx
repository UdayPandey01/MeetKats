import React from "react";

export const DivWrapper = (): JSX.Element => {
  // Define the step data for better maintainability
  const steps = [
    { number: "1", color: "#FFE990" },
    { number: "2", color: "#A4E387" },
    { number: "3", color: "#FF877B" },
    { number: "4", color: "#66BEF0" },
  ];

  return (
    <div className="w-full flex justify-between items-center gap-x-[230px] py-4">
      {steps.map((step, index) => (
        <div
          key={index}
          className="w-[116px] h-[116px] relative rounded-full flex items-center justify-center"
          style={{ backgroundColor: step.color }}
        >
          <div className="font-['Inter',Helvetica] font-semibold text-6xl tracking-[-1.20px] text-white">
            {step.number}
          </div>
        </div>
      ))}
    </div>
  );
};
