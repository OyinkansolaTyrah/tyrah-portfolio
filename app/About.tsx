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
          I'm Tyrah, a <span className={styles.textHighlight}>Developer</span> who
          refuses to separate how a website looks from how it performs. 
          I don't just write code to match a design file, I audit user flows, eliminate 
          loading bottlenecks, and ensure your web presence directly serves your business 
          goals. Whether collaborating on an active Next.js application or rapidly deploying 
          a marketing engine on Framer, I deliver functional engineering you can <span className={styles.textHighlight}>trust.</span>
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
          src="/images/tyrahHero.jpg"
          alt="Tyrah"
          className={styles.profileImage}
          width={400}
          height={500}
        />
      </div>

    </section>
  );
}