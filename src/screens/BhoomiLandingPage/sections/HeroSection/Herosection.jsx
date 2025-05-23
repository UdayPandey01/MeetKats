import { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { TfiApple } from "react-icons/tfi";
import { MdEmail } from "react-icons/md";

const HeroSection = () => {
  const [hovered, setHovered] = useState(null);

  const buttons = [
    {
      id: "google",
      text: "Continue with Google",
      icon: FcGoogle,
      bgColor: "bg-white",
      textColor: "text-gray-700",
      hoverBg: "hover:bg-gray-50",
    },
    {
      id: "apple",
      text: "Continue with Apple",
      icon: TfiApple,
      bgColor: "bg-black",
      textColor: "text-white",
      hoverBg: "hover:bg-gray-900",
    },
    {
      id: "email",
      text: "Sign in with Email",
      icon: MdEmail,
      bgColor: "bg-white",
      textColor: "text-gray-700",
      hoverBg: "hover:bg-gray-50",
    },
  ];
  return (
    <section className="flex flex-row mt-16 px-8">
          <div className="flex-1 ">
            <h1 className="[font-family:'Poppins',Helvetica] font-semibold text-black text-5xl leading-[67.2px]">
              Your Inner Circle <br />
              Just Got Bigger.
            </h1>
            <p className="[font-family:'Poppins',Helvetica] font-medium text-black text-lg mt-8 max-w-[420px]">
              Micro-networking for meaningful career growth — from classrooms to
              conferences.
            </p>

            {/* Auth Buttons */}
            <div className="mt-8 space-y-2 max-w-sm">
              {buttons.map((button) => (
                <button
                  key={button.id}
                  className={`w-72 flex justify-center items-center gap-3 ${
                    button.bgColor
                  } ${button.textColor} ${
                    button.hoverBg
                  } rounded-lg shadow-md border border-gray-200 font-medium text-base justify-center h-12 transition-all duration-300 transform ${
                    hovered === button.id ? "scale-[1.02]" : ""
                  }`}
                  onMouseEnter={() => setHovered(button.id)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div
                    className={`${
                      button.id === "google" ? "bg-transparent" : ""
                    } flex items-center justify-center`}
                  >
                    {button.icon({
                      size: 20,
                      className: button.id === "email" ? "text-blue-600" : "",
                    })}
                  </div>
                  <span>{button.text}</span>
                </button>
              ))}
            </div>

            <div className="mt-16 flex items-center">
              <p className="font-inter text-sm flex items-center gap-1.5">
                <span className="text-[#616161]">Are you a Newbie?</span>
                <span className="font-semibold text-[#21ab77] hover:underline cursor-pointer">
                  Join MeetKats - IT&#39;S FREE
                </span>
              </p>
            </div>
          </div>

          {/* Hero Images */}
          <div className="flex-1 relative">
            <div className="w-[247px] h-[233px] absolute top-0 left-[209px]">
              <img
                className="w-[235px] h-[149px] absolute top-[42px] left-1.5"
                alt="Group"
                src="/group.png"
              />
            </div>

            <div className="w-[370px] h-[333px] absolute top-[146px] left-[130px]">
              <div className="w-[305px] h-[270px] relative top-[31px] left-[33px]">
                <img
                  className="w-[298px] h-[261px] absolute -top-px -left-px"
                  alt="Group"
                  src="/group-1.png"
                />
              </div>
            </div>

            <div className="w-[92px] h-[207px] absolute top-[236px] left-[92px]">
              <img
                className="w-[79px] h-[199px] absolute top-[9px] left-3.5"
                alt="Vector"
                src="/vector-46.svg"
              />
              <img
                className="w-[83px] h-[199px] absolute top-0 left-0"
                alt="Vector"
                src="/vector-48.svg"
              />
              <img
                className="w-[71px] h-[45px] absolute top-6 left-1.5"
                alt="Vector"
                src="/vector-47.svg"
              />
              <img
                className="w-[71px] h-[25px] absolute top-[166px] left-1.5"
                alt="Vector"
                src="/vector-65.svg"
              />
              <img
                className="w-[71px] h-[81px] absolute top-[77px] left-1.5"
                alt="Vector"
                src="/vector-49.svg"
              />
              <img
                className="w-[71px] h-[53px] absolute top-[77px] left-1.5"
                alt="Vector"
                src="/vector-52.svg"
              />
              <img
                className="w-[30px] h-[7px] absolute top-[9px] left-1.5"
                alt="Vector"
                src="/vector-51.svg"
              />
              <img
                className="w-4 h-[7px] absolute top-[30px] left-3"
                alt="Vector"
                src="/vector-51.svg"
              />
              <img
                className="w-4 h-[7px] absolute top-[136px] left-3"
                alt="Vector"
                src="/vector-51.svg"
              />
              <img
                className="w-[59px] h-[3px] absolute top-[42px] left-3"
                alt="Vector"
                src="/vector-50.svg"
              />
              <img
                className="w-[59px] h-[3px] absolute top-[50px] left-3"
                alt="Vector"
                src="/vector-50.svg"
              />
              <img
                className="w-[54px] h-[3px] absolute top-[173px] left-[17px]"
                alt="Vector"
                src="/vector-50.svg"
              />
              <img
                className="w-[35px] h-[3px] absolute top-[180px] left-[17px]"
                alt="Vector"
                src="/vector-50.svg"
              />
              <img
                className="w-[50px] h-[3px] absolute top-[147px] left-3"
                alt="Vector"
                src="/vector-50.svg"
              />
              <img
                className="w-[27px] h-[3px] absolute top-[58px] left-3"
                alt="Vector"
                src="/vector-58.svg"
              />
              <img
                className="w-[45px] h-9 absolute top-[84px] left-[19px]"
                alt="Group"
                src="/group-2.png"
              />
              <img
                className="w-[3px] h-[3px] absolute top-[173px] left-3"
                alt="Vector"
                src="/vector-54.svg"
              />
              <img
                className="w-[3px] h-[3px] absolute top-[180px] left-3"
                alt="Vector"
                src="/vector-54.svg"
              />
            </div>

            <img
              className="w-36 h-[164px] absolute top-[304px] left-0"
              alt="Character"
              src="/character-2-1.png"
            />

            <div className="w-[135px] h-[159px] absolute top-[459px] left-[264px] rotate-[0.84deg]">
              <img
                className="w-5 h-[67px] absolute top-2.5 left-[62px] rotate-[-0.84deg]"
                alt="Vector"
                src="/vector-69.svg"
              />
              <img
                className="w-1 h-3 absolute top-[57px] left-[76px] rotate-[-0.84deg]"
                alt="Vector"
                src="/vector-62.svg"
              />
              <img
                className="w-[27px] h-[39px] absolute top-[47px] left-[74px] rotate-[-0.84deg]"
                alt="Vector"
                src="/vector-66.svg"
              />
              <img
                className="w-[15px] h-4 absolute top-[81px] left-1.5 rotate-[-0.84deg]"
                alt="Vector"
                src="/vector-63.svg"
              />
              <img
                className="w-[93px] h-[93px] absolute top-[68px] left-[43px] rotate-[-0.84deg]"
                alt="Vector"
                src="/vector-6.svg"
              />
              <img
                className="w-3 h-[26px] absolute top-[57px] left-[89px] rotate-[-0.84deg]"
                alt="Vector"
                src="/vector-9.svg"
              />
              <img
                className="w-[3px] h-[5px] absolute top-14 left-[93px] rotate-[-0.84deg]"
                alt="Vector"
                src="/vector-2.svg"
              />
              <img
                className="w-[9px] h-[23px] absolute top-[60px] left-[73px] rotate-[-0.84deg]"
                alt="Vector"
                src="/vector-28.svg"
              />
              <img
                className="w-[31px] h-[46px] absolute top-[94px] left-[17px] rotate-[-0.84deg]"
                alt="Vector"
                src="/vector-3.svg"
              />
              <img
                className="w-[7px] h-[77px] absolute top-[83px] left-20 rotate-[-0.84deg]"
                alt="Vector"
                src="/vector-16.svg"
              />
              <img
                className="w-[3px] h-1 absolute top-[97px] left-[86px] rotate-[-0.84deg]"
                alt="Vector"
                src="/vector-8.svg"
              />
              <img
                className="w-[3px] h-1 absolute top-[106px] left-[86px] rotate-[-0.84deg]"
                alt="Vector"
                src="/vector-8.svg"
              />
              <img
                className="w-[3px] h-1 absolute top-[116px] left-[89px] rotate-[-0.84deg]"
                alt="Vector"
                src="/vector-8.svg"
              />
              <img
                className="w-4 h-7 absolute top-[113px] left-[42px] rotate-[-0.84deg]"
                alt="Vector"
                src="/vector-10.svg"
              />
              <img
                className="w-1 h-[26px] absolute top-[73px] left-[113px] rotate-[-0.84deg]"
                alt="Vector"
                src="/vector-5.svg"
              />
              <img
                className="w-[30px] h-[49px] absolute top-[7px] left-[66px] rotate-[-0.84deg]"
                alt="Vector"
                src="/vector-61.svg"
              />
              <img
                className="w-[11px] h-[3px] absolute top-[26px] left-[76px] rotate-[-0.84deg]"
                alt="Vector"
                src="/vector-4.svg"
              />
              <img
                className="w-1.5 h-0.5 absolute top-[27px] left-[66px] rotate-[-0.84deg]"
                alt="Vector"
                src="/vector-1.svg"
              />
              <img
                className="w-1 h-1.5 absolute top-9 left-[73px] rotate-[-0.84deg]"
                alt="Vector"
                src="/vector-68.svg"
              />
              <img
                className="w-[3px] h-1 absolute top-[38px] left-[77px] rotate-[-0.84deg]"
                alt="Vector"
                src="/vector.svg"
              />
              <img
                className="w-[3px] h-px absolute top-[41px] left-[75px] rotate-[-0.84deg]"
                alt="Vector"
                src="/vector-7.svg"
              />
              <img
                className="w-[7px] h-[3px] absolute top-[30px] left-[78px] rotate-[-0.84deg]"
                alt="Vector"
                src="/vector-15.svg"
              />
              <img
                className="w-[5px] h-[3px] absolute top-8 left-[68px] rotate-[-0.84deg]"
                alt="Vector"
                src="/vector-11.svg"
              />
              <img
                className="w-2.5 h-[3px] absolute top-[30px] left-[77px] rotate-[-0.84deg]"
                alt="Vector"
                src="/vector-59.svg"
              />
              <img
                className="w-[3px] h-[3px] absolute top-[31px] left-[79px] rotate-[-0.84deg]"
                alt="Vector"
                src="/vector-35.svg"
              />
              <img
                className="w-[7px] h-0.5 absolute top-[31px] left-[78px] rotate-[-0.84deg]"
                alt="Vector"
                src="/vector-60.svg"
              />
              <img
                className="w-[7px] h-0.5 absolute top-[33px] left-[78px] rotate-[-0.84deg]"
                alt="Vector"
                src="/vector-12.svg"
              />
              <img
                className="w-1.5 h-1 absolute top-[38px] left-[78px] rotate-[-0.84deg]"
                alt="Vector"
                src="/vector-13.svg"
              />
              <img
                className="w-1 h-0.5 absolute top-[34px] left-[69px] rotate-[-0.84deg]"
                alt="Vector"
                src="/vector-14.svg"
              />
              <img
                className="w-0.5 h-0.5 absolute top-[33px] left-[69px] rotate-[-0.84deg]"
                alt="Vector"
                src="/vector-34.svg"
              />
              <img
                className="w-[5px] h-0.5 absolute top-[34px] left-[68px] rotate-[-0.84deg]"
                alt="Vector"
                src="/vector-25.svg"
              />
              <img
                className="w-[5px] h-0.5 absolute top-8 left-[68px] rotate-[-0.84deg]"
                alt="Vector"
                src="/vector-30.svg"
              />
              <img
                className="w-[9px] h-1 absolute top-[45px] left-[73px] rotate-[-0.84deg]"
                alt="Vector"
                src="/vector-19.svg"
              />
              <img
                className="w-[9px] h-[3px] absolute top-[45px] left-[73px] rotate-[-0.84deg]"
                alt="Vector"
                src="/vector-18.svg"
              />
              <img
                className="w-[11px] h-[3px] absolute top-11 left-[73px] rotate-[-0.84deg]"
                alt="Vector"
                src="/vector-17.svg"
              />
              <img
                className="w-2.5 h-1 absolute top-[45px] left-[73px] rotate-[-0.84deg]"
                alt="Vector"
                src="/vector-27.svg"
              />
              <img
                className="w-[57px] h-[120px] absolute top-0 left-[67px] rotate-[-0.84deg]"
                alt="Vector"
                src="/vector-40.svg"
              />
              <img
                className="w-[34px] h-8 absolute top-[70px] left-0 rotate-[-0.84deg]"
                alt="Vector"
                src="/vector-41.svg"
              />
              <img
                className="w-[35px] h-[33px] absolute top-[68px] left-0 rotate-[-0.84deg]"
                alt="Vector"
                src="/vector-20.svg"
              />
              <img
                className="w-[63px] h-[27px] absolute top-[126px] left-[57px] rotate-[-0.84deg]"
                alt="Group"
                src="/group-3.png"
              />
              <img
                className="w-[19px] h-[29px] absolute top-[74px] left-1.5 rotate-[-0.84deg]"
                alt="Vector"
                src="/vector-29.svg"
              />
              <img
                className="w-0.5 h-2 absolute top-[95px] left-5 rotate-[-0.84deg]"
                alt="Vector"
                src="/vector-21.svg"
              />
              <img
                className="w-[3px] h-[5px] absolute top-[83px] left-[52px] rotate-[-0.84deg]"
                alt="Vector"
                src="/vector-26.svg"
              />
              <img
                className="w-1 h-6 absolute top-[90px] left-[62px] rotate-[-0.84deg]"
                alt="Vector"
                src="/vector-24.svg"
              />
              <img
                className="w-[18px] h-[23px] absolute top-[119px] left-28 rotate-[-0.84deg]"
                alt="Vector"
                src="/vector-22.svg"
              />
            </div>

            <div className="w-[55px] h-[53px] absolute top-[186px] left-40">
              <img
                className="w-[52px] h-[53px] absolute top-0 left-[3px]"
                alt="Union"
                src="/union.svg"
              />
              <img
                className="w-[52px] h-[53px] absolute top-0 left-0"
                alt="Union"
                src="/union-1.svg"
              />
              <img
                className="w-[23px] h-5 absolute top-4 left-[15px]"
                alt="Vector"
                src="/vector-31.svg"
              />
            </div>

            <div className="w-[49px] h-[117px] absolute top-[403px] left-[382px]">
              <div className="w-12 h-[74px] absolute top-0 left-px">
                <div className="w-[38px] h-[53px] absolute top-[21px] left-2.5">
                  <div className="w-[38px] h-[43px] absolute top-0 left-0 bg-[url(/vector-31-1.svg)] bg-[100%_100%]">
                    <img
                      className="w-[15px] h-6 absolute top-[19px] left-3"
                      alt="Vector"
                      src="/vector-32-1.svg"
                    />
                  </div>
                  <div className="w-3 h-0.5 absolute top-11 left-[13px] bg-[#0b5243] rounded-[1px]" />
                  <div className="w-3 h-0.5 absolute top-[47px] left-[13px] bg-[#0b5243] rounded-[1px]" />
                  <div className="w-3 h-0.5 absolute top-[50px] left-[13px] bg-[#0b5243] rounded-[1px]" />
                </div>
                <img
                  className="w-[30px] h-[33px] absolute top-0 left-0"
                  alt="Three lines"
                  src="/three-lines.png"
                />
              </div>
              <img
                className="w-[33px] h-[41px] absolute top-[76px] -left-px"
                alt="Curved line"
                src="/curved-line.svg"
              />
            </div>

            <div className="w-[223px] h-[156px] absolute top-[252px] left-[431px]">
              <img
                className="w-[188px] h-[134px] absolute top-3.5 left-6"
                alt="Vector"
                src="/vector-42.svg"
              />
              <img
                className="w-[183px] h-[134px] absolute top-3.5 left-[27px]"
                alt="Vector"
                src="/vector-37.svg"
              />
              <img
                className="w-[183px] h-[13px] absolute top-3.5 left-[27px]"
                alt="Vector"
                src="/vector-32.svg"
              />
              <img
                className="w-1.5 h-[5px] absolute top-[18px] left-[35px]"
                alt="Vector"
                src="/vector-33.svg"
              />
              <img
                className="w-1.5 h-[5px] absolute top-[18px] left-[42px]"
                alt="Vector"
                src="/vector-33.svg"
              />
              <img
                className="w-1.5 h-[5px] absolute top-[18px] left-[50px]"
                alt="Vector"
                src="/vector-33.svg"
              />
              <div className="w-28 h-[71px] absolute top-8 left-[86px] bg-[url(/vector-43.svg)] bg-[100%_100%]">
                <img
                  className="w-[41px] h-[3px] absolute top-[54px] left-[5px]"
                  alt="Vector"
                  src="/vector-36.svg"
                />
                <img
                  className="w-[34px] h-[3px] absolute top-[60px] left-[5px]"
                  alt="Vector"
                  src="/vector-36.svg"
                />
                <img
                  className="w-[19px] h-[5px] absolute top-[59px] left-[87px]"
                  alt="Vector"
                  src="/vector-44.svg"
                />
                <img
                  className="w-[98px] h-[29px] absolute top-[11px] left-1.5"
                  alt="Group"
                  src="/group-5.png"
                />
              </div>
              <img
                className="w-[135px] h-[125px] absolute top-0 left-0"
                alt="Layer"
                src="/layer-1.svg"
              />
              <div className="w-14 h-[50px] absolute top-[66px] left-[161px]">
                <div className="w-[54px] h-[45px] absolute top-0 left-px bg-[#0b5243] rounded-lg" />
                <div className="w-[54px] h-[45px] absolute top-0 left-0 bg-white rounded-lg border-[0.75px] border-solid border-[#0b5243]" />
                <img
                  className="w-[54px] h-[51px] absolute top-0 left-0"
                  alt="Group"
                  src="/group-35.png"
                />
              </div>
              <img
                className="w-[38px] h-[35px] absolute top-[121px] left-[170px]"
                alt="Group"
                src="/group-3-1.png"
              />
              <div className="w-14 h-[49px] absolute top-[11px] left-[167px]">
                <div className="w-[55px] h-[49px] absolute top-0 left-px bg-[#0b5243] rounded-lg" />
                <div className="w-[55px] h-[49px] absolute top-0 left-0 bg-white rounded-lg border-[0.75px] border-solid border-[#0b5243]" />
                <img
                  className="w-[55px] h-[9px] absolute top-0 left-0"
                  alt="Group"
                  src="/group-35-1.png"
                />
                <img
                  className="w-[41px] h-[30px] absolute top-3 left-[7px]"
                  alt="Group"
                  src="/group-6.png"
                />
              </div>
            </div>
          </div>
        </section>
  );
};

export default HeroSection;