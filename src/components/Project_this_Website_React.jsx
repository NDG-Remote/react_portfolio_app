import { reactapp, checkbox } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
        <div className={`flex flex-row p-4 rounded-[20px] feature-card dark-frame`}>
          <img src={reactapp} alt="spanien grundbuchauszug" className="w-[100%] h-[100%]" />
        </div>

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        React Web App<br /> <span className="text-gradient-custom">This Portfolio Website</span>
      </h2>
      <div className={`${styles.paragraph} max-w-[470px] mt-5`}>
        <p>Crafting a unique and engaging online presence is crucial for showcasing skills and experiences. I designed and developed this personal portfolio website using React to provide a dynamic and interactive platform.</p>
        <h4 className="text-gradient-custom font-poppins font-semibold text-[20px] leading-[32px] text-white mt-3 mb-1">What I did:</h4>
        <ul>
          <li class="text-[14px]"><img class="inline checkbox" src={checkbox} alt="checkbox" />Create a React Web App</li>
          <li class="text-[14px]"><img class="inline checkbox" src={checkbox} alt="checkbox" />Basics of Tailwind CSS</li>
          <li class="text-[14px]"><img class="inline checkbox" src={checkbox} alt="checkbox" />Work with the React Components Structure</li>
          <li class="text-[14px]"><img class="inline checkbox" src={checkbox} alt="checkbox" />Deeper Insights in Git, NPM and Vite</li>
        </ul>
        <p>Please check out my GitHub Repository to gain more insides.</p>
      </div>
      <a href={"https://github.com/NDG-Remote/react_portfolio_app.git"} target="_blank" rel="noopener noreferrer"><Button styles={`mt-10`} /></a>
    </div>
  </section>
);

export default Billing;