"use client";

import Image from "next/image";

const Hero = () => {
  return (
    <div className="h-[100vh] bg-[url(/hero_bg.png)] bg-cover relative">
      <div className="container flex md:flex-row flex-col justify-between 2xl:mt-[120px] sm:mt-[50px] mt-[30px] h-full">
        <div className="flex flex-col md:gap-[20px] gap-3 sm:items-start items-center">
          <button className="lg:w-[290px] w-[200px]  h-[54px] lg:h-[64px] object-cover bg-[url(/btn_bg.png)] text-center text-toptext font-bold lg:leading-[32px] leading-3 lg:text-[24px] text-[16px] ">
            Welcome To KidsLand
          </button>
          <h1 className="xl:text-[70px] sm:text-[48px] text-[32px] leading-[40px] font-bold sm:leading-[60px] xl:leading-[85px] text-textprimary sm:w-[503px] w-full sm:text-start text-center">
            Learn, Play and Grow!
          </h1>
          <p className="paragraph md:w-[624px] w-full ">
            A fun-filled space where kids explore, create, and make new friends!
            From games and sports to arts and crafts, we offer exciting
            activities for all ages. Join us for a world of play, learning, and
            adventure!
          </p>
          <button className="md:px-[30px] px-[20px] md:py-[16px] py-[8px] text-[18px] leading-[18px] font-semibold text-white bg-primary rounded-[36px] cursor-pointer w-fit static z-40">
            Get Started
          </button>
        </div>
      </div>
      <Image
        src="/children.png"
        width={1000}
        height={573}
        className="2xl:w-[932px] xl:w-[700px] sm:w-[600px] md:h-auto lg:h-[373px]  w-full h-auto  z-30  2xl:h-[573px] absolute bottom-0 right-0 object-fill 2xl mb-0"
        alt="hero"
      />
      {/* </div> */}

      <Image
        src="/hero_green.png"
        width={1000}
        height={137.57}
        className="h-[137.57px] w-full object-cover absolute bottom-0 z-20"
        alt="grass"
      />

      <Image
        src="/hero_grass.png"
        width={1000}
        height={314}
        className="h-[314px] w-full object-cover absolute bottom-0 z-10"
        alt="grass"
      />
    </div>
  );
};

export default Hero;
