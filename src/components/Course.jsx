import { courses } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const CourseCard = ({ year, title, content, link, index }) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== courses.length - 1 ? "mb-8" : "mb-0"} feature-card dark-frame`}>
      <div className={`w-[64px] h-[40px] rounded-[5px] ${styles.flexCenter} bg-dimWhite`}>
        <p className="font-poppins font-semibold text-black text-[16px] text-center">{year}</p>
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
          {title}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
          {content}
        </p>
      </div>
    </div>
  </a>
);

const Course = () =>  (
  <section id="education" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Coding Education: <br className="sm:block hidden" /> <span className="text-gradient-custom">Learning is Essential.</span>
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        My path as a developer has been marked by a commitment to self-taught and online learning, investing countless hours to refine my programming skills. In this ever-evolving digital landscape, I recognize that continuous learning is the key to my progress.
      </p>
      {/* <Button styles={`mt-10`} /> */}
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {courses.map((course, index) => (
        <CourseCard key={course.id} {...course} index={index} />
      ))}
    </div>
  </section>
);

export default Course;