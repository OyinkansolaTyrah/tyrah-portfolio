import styles from "./components/Projects.module.css";

const projects = [
  {
    title: "Mental Wellness Platform",
    image: "/images/calmmindd.png",
    description:
      "A calming platform focused on mental wellness and emotional wellbeing.",

    details:
      "Designed and developed a modern user experience with accessibility, responsive design, and conversion-focused layouts.",

    tech: ["Framer", "Notion"],

    liveLink: "https://calmmindd.framer.website/",
    caseStudy: "#",
  },

  {
    title: "Business Landing Page",
    image: "/images/ziiiistudio.png",
    description:
      "A landing page built to convert visitors into leads.",

    details:
      "Focused on user flow, performance optimization, and strategic call-to-action placement.",

    tech: ["Framer", "Notion"],

    liveLink: "https://ziiiistudio.framer.website/",
    caseStudy: "#",
  },

  {
    title: "E-Commerce Website",
    image: "/images/tyrahdesign.png",
    description:
      "A modern online store built for sales and growth.",

    details:
      "Created a responsive shopping experience optimized for usability and conversions.",

    tech: ["Typescript", "CSS MOdules", "Notion"],

    liveLink: "#",
    caseStudy: "#",
  },
];

export default function Projects() {
  return (
    <section
      className={styles.projectsSection}
      id="projects"
    >
      <h2 className={styles.sectionTitle}>
        /featured projects
      </h2>

      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <article
            key={project.title}
            className={styles.projectCard}
          >
            <img
              src={project.image}
              alt={project.title}
              className={styles.projectImage}
            />

            <div className={styles.projectInfo}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className={styles.projectList}>
                    {project.tech.map((technology) => (
                        <li key={technology}>
                            {technology}
                        </li>
                    ))}
              </ul>
              <div className={styles.projectButtons}>
                {/* <a href={project.liveLink}>
                  Live Site
                </a> */}

                <a href={project.caseStudy}>
                  Case Study
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}