import { multistepform } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        JavaScript Project <br className="sm:block hidden" /> Custom Multistep Form.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Designed exclusively for Spanien-Grundbuchauszug.com, this custom multistep form streamlines the request and order process for land register extracts, ensuring a smooth and user-friendly experience.
      </p>

      <a href={"https://www.spanien-grundbuchauszug.com"} target="_blank" rel="noopener noreferrer"><Button styles={`mt-10`} /></a>
    </div>

    <div className={layout.sectionImg}>
      <a href={"https://www.spanien-grundbuchauszug.com"} target="_blank" rel="noopener noreferrer">
        <div className={`w-[70%] flex flex-row p-6 rounded-[20px] feature-card`}>
          <img src={multistepform} alt="spanien grundbuchauszug" className="w-[100%] h-[100%]" />
        </div>
      </a>
    </div>
  </section>
);

export default CardDeal;