import { languages } from "../constants";
import styles from "../style";

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {languages.map((client) => (
        <div key={client.id} className={`flex-2 ${styles.flexCenter} sm:min-w-[110px] min-w-[100px] m-5`}>
          <img src={client.logo} alt="languages_logo" className="sm:w-[80px] w-[50px] object-contain icon-gray" />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
