import { apple, bill, budgetscript, google, checkbox } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <a href={"https://github.com/NDG-Remote/G-Ads_budget_check"} target="_blank" rel="noopener noreferrer">
        <div className={`flex flex-row p-4 rounded-[20px] feature-card dark-frame`}>
          <img src={budgetscript} alt="spanien grundbuchauszug" className="w-[100%] h-[100%]" />
        </div>
      </a>

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        JavaScript Project<br /> <span className="text-gradient-custom">Google Ads Budget Monitoring Script.</span>
      </h2>
      <div className={`${styles.paragraph} max-w-[470px] mt-5`}>
        <p>Frustrated by the lack of useful scripts for monitoring budget deviations on a weekly bases, I took matters into my own hands. This script was born out of a need to track budget variances of 10% or more within a weekly timeframe.</p>
        <h4 className="text-gradient-custom font-poppins font-semibold text-[20px] leading-[32px] text-white mt-3 mb-1">What I did:</h4>
        <ul>
          <li class="text-[14px]"><img class="inline checkbox" src={checkbox} alt="checkbox" />Web and Tutorial resaarch</li>
          <li class="text-[14px]"><img class="inline checkbox" src={checkbox} alt="checkbox" />Write new code on the base of a template script</li>
          <li class="text-[14px]"><img class="inline checkbox" src={checkbox} alt="checkbox" />Adjust the basic Google Sheet to the clients needs</li>
          <li class="text-[14px]"><img class="inline checkbox" src={checkbox} alt="checkbox" />Testing and deploying</li>
        </ul>
        <p>You can find the script, a corresponding Google Sheet, and a comprehensive manual/tutorial video on my GitHub account.</p>
      </div>
      <a href={"https://github.com/NDG-Remote/G-Ads_budget_check"} target="_blank" rel="noopener noreferrer"><Button styles={`mt-10`} /></a>
    </div>
  </section>
);

export default Billing;