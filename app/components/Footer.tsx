import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        
        <div className={styles.footerLeft}>
          <a href="#" className={styles.logo}>
            Tyrah
          </a>
          <p>
            Frontend developer passionate about creating innovative solutions and delivering exceptional user experiences.
          </p>
        </div>
        <div className={styles.footerCenter}>
            <h4>
                Quick Links
            </h4>

          <nav>
            <ul className={styles.navLinks}>
              <li>
                <a href="#services" className={styles.btn}><b>Services</b></a>
              </li>

              <li>
                <a href="#projects" className={styles.btn}><b>Projects</b></a>
              </li>

              <li>
                <a href="#about" className={styles.btn}><b>About</b></a>
              </li>

              <li>
                <a href="#contact" className={styles.btn}><b>Contact</b></a>
              </li>
            </ul>

          </nav>
        </div>

        <div className={styles.footerRight}>
            <h4>
                Let's Connect
            </h4>
            <div className={styles.footerA}>
              <a href="mailto:musiliuoyinkansolatyrah@email.com" className={styles.btn}>
                Email Me
              </a>

              <a
                href="https://www.linkedin.com/in/rukayatmusiliu"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btn}
              >
                LinkedIn
              </a>
            </div>
        </div>

      </div>

      <hr />
      <div className={styles.footerBottom}>
        <p> &copy; {new Date().getFullYear()} Tyrah. All Rights Reserved</p>
      </div>
    </footer>
  );
}
