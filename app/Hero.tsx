import styles from "./components/Hero.module.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJsSquare
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript
} from "react-icons/si";

export default function Hero() {
  return (
    <section className={styles.hero}>

      <div className={styles.heroImage}>

        <img
            src="/images/tyrahHero.jpg"
            alt="Tyrah"
            className={styles.profile}
        />

        <span className={`${styles.tech} ${styles.html}`}><FaHtml5 /></span>

        <span className={`${styles.tech} ${styles.css}`}><FaCss3Alt /></span>

        <span className={`${styles.tech} ${styles.js}`}><FaJsSquare /></span>

        <span className={`${styles.tech} ${styles.react}`}><FaReact /></span>

        <span className={`${styles.tech} ${styles.next}`}><SiNextdotjs /></span>

        <span className={`${styles.tech} ${styles.ts}`}><SiTypescript /></span>

      </div>

      <div className={styles.heroContent}>

        <h3 className={styles.heroIntro}>
          hi, <span className={styles.textHighlight}>Tyrah</span> here
        </h3>

        <h1 className={styles.heroTitle}>
          a<span className={styles.textHighlight}> Front-End Developer</span>
        </h1>

        <p className={styles.heroDescription}>
          I am a Frontend Developer & UI/UX Designer 
          bridging the gap between clean aesthetics and production ready code. 
          I specialize in building zero-friction, ultra-fast 
          web experiences that keeps users from dropping off.
        </p>

        <div className={styles.heroButtons}>

          <a
            href="/cv.pdf"
            className={styles.btnPrimary}
          >
            Download CV
          </a>

          <a
            href="#contact"
            className={styles.btnSecondary}
          >
            Say Hi
          </a>

        </div>

      </div>

    </section>
  );
}