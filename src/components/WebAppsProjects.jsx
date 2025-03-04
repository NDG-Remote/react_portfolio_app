import WebAppCard from "./WebAppCard";
import { spgb, checkbox } from "../assets";
import { webAppsProjects } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const WebAppProject = () => (
  <section className={layout.sectionInfo}>
    <div id="projects" className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Web App Projects
      </h2>
    </div>
    <div className={`${layout.sectionProjectCard} w-[90%] border-3 border-white rounded-lg`}>
      <div className="flex flex-wrap sm:justify-start justify-center w-full relative z-[1]">
        {webAppsProjects.map((card) => <WebAppCard key={card.id} {...card} />)}
      </div>
    </div>
  </section>
);

export default WebAppProject;