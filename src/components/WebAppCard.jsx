import { checkbox, uncheckedbox } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const WebAppCard = ({ title, description, stack, cta, button, link, img }) => (
  <section className={layout.section}>
    <div id="projects" className={layout.sectionInfo}>
      <h2 className={`${styles.heading2} text-gradient-custom`}>
        { title }
      </h2>
      <div className={`${styles.paragraph} max-w-[470px] mt-5`}>
      <p>
        { description }
      </p>
      <h4 className="text-gradient-custom font-poppins font-semibold text-[20px] leading-[32px] text-white mt-3 mb-1">Stack and Technologies</h4>
      <ul>
        {stack.map((tech, index) => (
          <li key={index} className="text-[14px]">
            <img className="inline checkbox" src={checkbox} alt="checkbox" /> {tech}
          </li>
        ))}
      </ul>
      <p>{cta}</p>
    </div>

      <a href={link} target="_blank" rel="noopener noreferrer">
        <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-custom-gradient rounded-[10px] outline-none ${styles}`}>
          {button}
        </button>
      </a>
    </div>

    <div className={layout.sectionImg}>
      <div className={`p-0 sm:block w-[100%] flex flex-row p-6 rounded-[20px] feature-card dark-frame`}>
        <img src={img} alt={title} className="w-[100%] h-[100%]" />
      </div>
    </div>
  </section>
);

export default WebAppCard;