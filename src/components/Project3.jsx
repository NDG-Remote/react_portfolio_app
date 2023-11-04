import { multistepform } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import FormSpGb from "./FormSpGb";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        JavaScript Project <br /> <span className="text-gradient-custom">Custom Multistep Form.</span>
      </h2>
      <h2 className=" {styles.heading2} text-gradient-custom">
        Still in progress!
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Designed exclusively for Spanien-Grundbuchauszug.com, this custom multistep form streamlines the request and order process for land register extracts, ensuring a smooth and user-friendly experience.
      </p>

      <a href={"https://github.com/NDG-Remote/Multistep-Form-Sp-Gb.com"} target="_blank" rel="noopener noreferrer"><Button styles={`mt-10`} /></a>
    </div>

    <div className={layout.sectionImg}>
      <a href={"https://github.com/NDG-Remote/Multistep-Form-Sp-Gb.com"} target="_blank" rel="noopener noreferrer">
        <div className={`w-[100%] flex flex-row pt-6 pb-6 rounded-[20px] feature-card`}>
          <FormSpGb />
        </div>
      </a>
    </div>
  </section>
);

export default CardDeal;