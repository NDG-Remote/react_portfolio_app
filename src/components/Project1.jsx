import { Project1 } from ".";
import { spgb, checkbox } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div id="projects" className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Website Project <br /> <span className="text-gradient-custom">Wordpress Website.</span>
      </h2>
      <div className={`${styles.paragraph} max-w-[470px] mt-5`}>
      <p>
        One day, I realized that there are numerous German-speaking homeowners and aspiring property owners in Spain, yet no online service was available for them to easily order register extracts. This led me to create Spain-Grundbuchauszug.com, a platform dedicated to serving German-speaking clients seeking land register extracts for Spanish properties.
      </p>
      <h4 className="text-gradient-custom font-poppins font-semibold text-[20px] leading-[32px] text-white mt-3 mb-1">Here's what I've accomplished:</h4>
        <ul>
          <li class="text-[14px]"><img class="inline checkbox" src={checkbox} alt="checkbox" />Developed the website using Wordpress and Elementor</li>
          <li class="text-[14px]"><img class="inline checkbox" src={checkbox} alt="checkbox" />SEO and copywriting</li>
          <li class="text-[14px]"><img class="inline checkbox" src={checkbox} alt="checkbox" />Currently managing the service</li>
          <li class="text-[14px]"><img class="inline checkbox" src={checkbox} alt="checkbox" />Digital marketing through Google and Social Media</li>
        </ul>
        <p>Take a moment to visit the website or even become one of our satisfied clients.</p>
      </div>

      <a href={"https://www.spanien-grundbuchauszug.com"} target="_blank" rel="noopener noreferrer"><Button styles={`mt-10`} /></a>
    </div>

    <div className={layout.sectionImg}>
      <a href={"https://www.spanien-grundbuchauszug.com"} target="_blank" rel="noopener noreferrer">
        <div className={`p-0 sm:block w-[100%] flex flex-row p-6 rounded-[20px] feature-card dark-frame`}>
          <img src={spgb} alt="spanien grundbuchauszug" className="w-[100%] h-[100%]" />
        </div>
      </a>
    </div>
  </section>
);

export default CardDeal;