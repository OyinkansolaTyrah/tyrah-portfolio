import styles from "./components/Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>

      <div className={styles.heroImage}>
        <div className={styles.portraitPlaceholder}>
          Pixel Portrait
        </div>
      </div>

      <div className={styles.heroContent}>

        <h3 className={styles.heroIntro}>
          hi, <span className={styles.textHighlight}>Tyrah</span> here
        </h3>

        <h1 className={styles.heroTitle}>
          a<span className={styles.textHighlight}> Front-End Developer</span>
        </h1>

        <p className={styles.heroDescription}>
          I design and develop responsive,
          user-focused websites that blend
          aesthetics with functionality.
          My goal is to create digital
          experiences that help brands
          grow and connect with their
          audience.
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