import { tools } from "../constants";
import styles from "../style";

const Tools = () => (
  <section className={`${styles.flexCenter} my-6`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {tools.map((tools) => (
        <div key={tools.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[110px] min-w-[100px] m-5`}>
          <img src={tools.logo} alt="tools_logo" className="sm:w-[80px] w-[50px] object-contain icon-gray" />
        </div>
      ))}
    </div>
  </section>
);

export default Tools;