import styles from "./style";

import { Navbar, Course, Project1, Project2, Project3, Project_this_Website_React, Project_WebApp_Flask, Languages, Tools, CTA, Footer, Testimonials, Hero } from "./components";
import FeedbackCard from "./components/FeedbackCard";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
        </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero  />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Languages />
        <Project1 />
        <Project_this_Website_React />
        <Project_WebApp_Flask />
        <Project2 />
        <Project3 />
        <Testimonials />
        <Tools />
        <Course />
        <CTA />
        {/* <Stats /> */}
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
