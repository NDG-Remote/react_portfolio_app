import { Project1 } from ".";
import { spgb } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h3 className={styles.heading2}>
        Website Project <br className="sm:block hidden" /> Wordpress Website.
      </h3>
      <p className={`${styles.paragraph} max-w-[600px] mt-5`}>
        Spain-Grundbuchauszug.com is the go-to platform for German-speaking clients looking to request land register extracts for properties in Spain. Our website provides easy, user-friendly access to essential information.
      </p>

      <a href={"https://www.spanien-grundbuchauszug.com"} target="_blank" rel="noopener noreferrer"><Button styles={`mt-10`} /></a>
    </div>

    <div className={layout.sectionImg}>
      <div className={`flex flex-row p-6 rounded-[20px] feature-card`}>
        <img src={spgb} alt="billing" className="w-[70%] h-[100%]" />
      </div>
    </div>
  </section>
);

export default CardDeal;