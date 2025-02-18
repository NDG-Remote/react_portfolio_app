import { Project1 } from ".";
import { flaskapp, checkbox, uncheckedbox } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div id="projects" className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Flask Web App <br /> <span className="text-gradient-custom">Fruit Sharing Community App</span>
      </h2>
      <h3 className="text-gradient-custom">
        Still in progress!
      </h3>
      <div className={`${styles.paragraph} max-w-[470px] mt-5`}>
      <p>
        I'm currently developing a web app to create a platform for homeowners with large gardens and surplus produce. Users can notify others about available fruits, vegetables, or other produce for free, at a fair price, or in exchange for a bit of gardening help.
      </p>
      <p>
        The application is built using the Flask framework, incorporating HTML and CSS with Bootstrap for front-end design. JavaScript is utilized for interactive elements, and there's a connection to the Google Maps API. Data management is handled through an SQLite3 database, ensuring a robust and efficient back-end structure.
      </p>
      <h4 className="text-gradient-custom font-poppins font-semibold text-[20px] leading-[32px] text-white mt-3 mb-1">Here's what I've accomplished:</h4>
        <ul>
          <li class="text-[14px]"><img class="inline checkbox" src={checkbox} alt="checkbox" />Building a Flask Web App from Scratch</li>
          <li class="text-[14px]"><img class="inline checkbox" src={checkbox} alt="checkbox" />Full-stack development</li>
          <li class="text-[14px]"><img class="inline checkbox" src={checkbox} alt="checkbox" />Relational Database Management</li>
          <li class="text-[14px]"><img class="inline checkbox" src={checkbox} alt="checkbox" />API Integration (Google Maps)</li>
          <li class="text-[14px]"><img class="inline checkbox" src={uncheckedbox} alt="checkbox" />Implement different language versions</li>
        </ul>
        <p>Create a free account and test the web app in it's test market, the Balearic Islands of Spain. You can offer fruits, save offers of other Users in your Pick-List and much more.</p>
      </div>

      <a href={"https://pick-hub.onrender.com/"} target="_blank" rel="noopener noreferrer"><Button styles={`mt-10`} /></a>
    </div>

    <div className={layout.sectionImg}>
      {/* <a href={"https://pick-hub.onrender.com/"} target="_blank" rel="noopener noreferrer">
        <div className={`p-0 sm:block w-[100%] flex flex-row p-6 rounded-[20px] feature-card dark-frame`}>
          <img src={flaskapp} alt="spanien grundbuchauszug" className="w-[100%] h-[100%]" />
        </div>
      </a>        */}
      <div className={`p-0 sm:block flex flex-row p-6 rounded-[20px] feature-card dark-frame`}>
      <iframe
          title="Sp GB Form"
          src="https://pick-hub.onrender.com/"
          width="600px"
          height="800px"
          frameBorder="0"
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
        </div>
    </div>
  </section>
);

export default CardDeal;