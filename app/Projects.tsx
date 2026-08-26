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
    title: "Personal Portfolio",
    image: "/images/tyrahdesign.png",
    description:
      "A personal portfolio website designed to showcase my work, skills, and experience as a web designer and developer.",

    details:
      "Designed and developed a responsive portfolio experience with a clean visual system, project showcase, responsive layouts, and clear calls to action for potential clients and employers.",

    tech: ["Next.js", "TypeScript", "CSS Modules"],

    liveLink: "#",
    caseStudy: "#",
  },

  {
    title: "Productivity Manager",
    image: "/images/taskflow.png",
    description:
      "A personal productivity dashboard designed to help users organize and manage their daily tasks.",

    details:
      "Built an interactive task management experience with task creation, completion tracking, task deletion, customization options, and local data persistence.",

    tech: ["HTML", "CSS", "JavaScript", "Local Storage"],

    liveLink: "https://taskflowdaily.vercel.app/",
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
                <a href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer">
                  Live Site
                </a>

                {/* <a href={project.caseStudy}>
                  Case Study
                </a> */}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}