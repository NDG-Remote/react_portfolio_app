import { multistepform, checkbox, uncheckedbox, github } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import FormSpGb from "./FormSpGb";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        JavaScript Project <br /> <span className="text-gradient-custom">Custom Multistep Form.</span>
      </h2>
      <div className={`${styles.paragraph} max-w-[470px] mt-5`}>
        <p>Independently crafted for Spanien-Grundbuchauszug.com, this custom multistep form streamlines the request and order process for land register extracts, ensuring a smooth and user-friendly experience.</p>
        <h4 className="text-gradient-custom font-poppins font-semibold text-[20px] leading-[32px] text-white mt-3 mb-1">To-Do List:</h4>
        <ul>
          <li class="text-[14px]"><img class="inline checkbox" src={checkbox} alt="checkbox" />Developed the HTML, CSS, and JavaScript from scratch</li>
          <li class="text-[14px]"><img class="inline checkbox" src={checkbox} alt="checkbox" />Implemented logic for total cost calculation</li>
          <li class="text-[14px]"><img class="inline checkbox" src={uncheckedbox} alt="checkbox" />Integrated payment processing and submission handling</li>
          <li class="text-[14px]"><img class="inline checkbox" src={uncheckedbox} alt="checkbox" />Built server-side and client-side form validation</li>
        </ul>
        <p>Feel free to check out my GitHub repository for a closer look at the code!</p>
      </div>
      <a href={"https://github.com/NDG-Remote/Multistep-Form-Sp-Gb.com"} target="_blank" rel="noopener noreferrer"><Button styles={`mt-10`} /></a>
    </div>

    <div className={layout.sectionImg}>
      <FormSpGb />
    </div>
  </section>
);

export default CardDeal;