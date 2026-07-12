import styles from "./components/About.module.css";
import Image from "next/image";

export default function About() {
  return (
    <section className={styles.aboutSection} id="about">

      <div className={styles.aboutContent}>

        <h2 className={styles.aboutTitle}>
          /about me
        </h2>

        <p className={styles.aboutDescription}>
          I'm Tyrah, a <span className={styles.textHighlight}>Front-End Developer</span> and 
          <span className={styles.textHighlight}> UI/UX Designer. </span>
          My goal is to help businesses establish
          a strong online presence through thoughtful design,
          clean code, and conversion-focused user experiences.
        </p>

        <p className={styles.techTitle}>
          Here are some technologies I have been working with:
        </p>

        <ul className={styles.techList}>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>Next.js</li>
          <li>UI/UX Design</li>
          <li>Figma</li>
          <li>Framer</li>
          <li>Notion</li>
        </ul>

      </div>

      <div className={styles.aboutImage}>
        <Image
          src="/images/tyrah.jpg"
          alt="Tyrah"
          className={styles.profileImage}
          width={400}
          height={500}
        />
      </div>

    </section>
  );
}