import styles from "../style";
import ButtonContact from "./ButtonContact";
/* import ContactForm from "./ContactForm"; */

const CTA = () => (
  <section id="contact" className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Let’s talk!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Got questions or ideas? I'm all ears! Drop me a line, and let's chat about your project or any inquiries you may have.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <a href={"mailto:andrea.glaus@me.com?subject=Contact%20Form%20-%20Portfolio%20Website%20andrea-glaus.com&body=Hi%20Andrea%2C%0D%0A%0D%0AI%20came%20across%20your%20amazing%20portfolio%20website%20and%20wanted%20to%20get%20in%20touch.%0D%0A%0D%0AHere%20are%20my%20contact%20details%3A%0D%0A%0D%0AName%3A%0D%0ACompany%3A%0D%0AEmail%3A%0D%0AMessage%3A%0D%0A%0D%0AHave%20a%20lovely%20day!%0D%0A%0D%0A"} target="_blank" rel="noopener noreferrer">{/* <ContactForm styles={`mt-10`} /> */}<ButtonContact styles={`mt-10 mb-10`} /></a>
    </div>
  </section>
);

export default CTA;
