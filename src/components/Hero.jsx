import styles from "../style";
import { discount, hero } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-black-gradient rounded-[10px] mb-2">
          <p className={`${styles.paragraph} ml-4 mr-4`}>
            <span className="text-white mr-2"> Learn. </span> Code. {" "}
            <span className="text-white ml-2 mr-2"> Grow. </span> Repeat. 
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[48px] text-white ss:leading-[100.8px] leading-[75px] mt-4">
            Hi, I'm <br className="sm:block hidden" />{" "}
            <span className="text-gradient-custom"><nobr>Andrea Glaus</nobr></span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            {/* <GetStarted /> */}
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
          web developer.
        </h1>
        <p className={`${styles.paragraph} max-w-[670px] mt-5`}>A passionate web and software developer with a knack for building robust and user-friendly digital experiences. Originally from Switzerland and now based in sunny Spain, I've been crafting code and growing as a developer since 2020. My journey has taken me from low-code CMS platforms to full-stack projects using JavaScript, Python, and React. I thrive on solving complex problems, embracing new challenges, and collaborating with dynamic teams to create impactful digital products.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={hero} alt="andrea-programming" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        {/* <GetStarted /> */}
      </div>
    </section>
  );
};

export default Hero;