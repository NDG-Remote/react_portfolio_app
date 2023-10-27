import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      {<img src={bill} alt="Project2" className="w-[100%] h-[100%] relative z-[5]" />}

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        JavaScript Project <br className="sm:block hidden" /> Google Ads Budget Monitoring Script.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Frustrated by the lack of useful tools for monitoring budget deviations, I took matters into my own hands. This script was born out of a need to track budget variances of 10% or more within a weekly timeframe. You can find the script, a corresponding Google Sheet, and a comprehensive manual/tutorial for downloading and setup on my GitHub account.
      </p>

      <a href={"https://www.spanien-grundbuchauszug.com"} target="_blank" rel="noopener noreferrer"><Button styles={`mt-10`} /></a>
    </div>
  </section>
);

export default Billing;