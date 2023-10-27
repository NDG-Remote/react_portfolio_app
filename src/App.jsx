import styles from "./style";

import { Navbar, Business, Project1, Project2, Project3, Languages, Tools, CTA, Stats, Footer, Testimonials, Hero } from "./components";

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
        <Project2 />
        <Project3 />
        <Testimonials />
        <Tools />
        <Business />
        <CTA />
        {/* <Stats /> */}
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
