import styles from "../style";
import ButtonContact from "./ButtonContact";
/* import ContactForm from "./ContactForm"; */

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Let’s talk!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Got questions or ideas? I'm all ears! Drop me a line, and let's chat about your project or any inquiries you may have.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <a href={"mailto:andrea.glaus@me.com"} target="_blank" rel="noopener noreferrer">{/* <ContactForm styles={`mt-10`} /> */}<ButtonContact styles={`mt-10`} /></a>
    </div>
  </section>
);

export default CTA;
