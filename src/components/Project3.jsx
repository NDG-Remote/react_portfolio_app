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
      <h3 className="text-gradient-custom">
        Still in progress!
      </h3>
      <div className={`${styles.paragraph} max-w-[470px] mt-5`}>
        <p>Independently crafted for Spanien-Grundbuchauszug.com, this custom multistep form streamlines the request and order process for land register extracts, ensuring a smooth and user-friendly experience. Once completed, it will adhere to best practices in server-side and client-side form validation, payment processing, and cybersecurity standards.</p>
        <h4 className="text-gradient-custom font-poppins font-semibold text-[20px] leading-[32px] text-white mt-3 mb-1">To-Do List:</h4>
        <ul>
          <li class="text-[14px]"><img class="inline checkbox" src={checkbox} alt="checkbox" />HTML and CSS from scratch</li>
          <li class="text-[14px]"><img class="inline checkbox" src={uncheckedbox} alt="checkbox" />Custom form validation, front-end and server-side</li>
          <li class="text-[14px]"><img class="inline checkbox" src={uncheckedbox} alt="checkbox" />Secure payment integration with PayPal and Stripe</li>
          <li class="text-[14px]"><img class="inline checkbox" src={uncheckedbox} alt="checkbox" />Developed Flask backend with database</li>
        </ul>
        <p>Once completed, the form will be seamlessly integrated into my website. Follow my GitHub account for updates on the coding progress:</p>
      </div>
      <a href={"https://github.com/NDG-Remote/Multistep-Form-Sp-Gb.com"} target="_blank" rel="noopener noreferrer"><Button styles={`mt-10`} /></a>
    </div>

    <div className={layout.sectionImg}>
      <a href={"https://myformdesign.online/spanien-grundbuchauszug"} target="_blank" rel="noopener noreferrer">
        <div className={`w-[100%] flex flex-row p-6 rounded-[20px] feature-card dark-frame`}>
          <FormSpGb />
        </div>
      </a>
    </div>
  </section>
);

export default CardDeal;