import styles from "./components/Projects.module.css";

const projects = [
  {
    title: "Oleku | Furniture & Living",
    image: "/images/oleku.png",
    description:
      "Designed and developed a modern furniture e-commerce experience inspired by timeless craftsmanship, contemporary interiors and editorial design.",

    details:
      "A furniture and home living platform created to make discovering and shopping for thoughfully designed pieces seamless and intuitive. Built with a focus on clean layouts, responsive design and a refined shopping experience, combining visual storytelling with functional e-commerce features.",

    tech: [ "Next.js", "React", "TypeScript", "CSS Modules", "Supabase"],

    liveLink: "#",
    caseStudy: "#",
  },
  {
    title: "Calm Mind",
    image: "/images/calmmindd.png",
    description:
      "Designed a high-conversion, low stress user flow. Focused heavily on color psychology and visual hierarchy to ensure zero cognitive friction for users in distress.",

    details:
      "A thoughtfully designed digital space focused on emotional wellbeign. Built using a mobile-first UI approach with smooth layouts to ensure zero cognitive friction for users seeking a moment of peace.",

    tech: ["Framer", "UI/UX Design", "Asset Optimization"],

    liveLink: "https://calmmindd.framer.website/",
    caseStudy: "#",
  },

  
  {
    title: "Productivity Manager",
    image: "/images/taskflow.png",
    description:
      "Built a lightweight dashboard optimized for instant interactivity using Local Storage, bypassing backend lag so users can manage tasks with zero latency.",

    details:
      "A fast interactive task dashboard engineered with custom JavaScript. By utilizing Local Storage to manage and persist user state locally, it completely bypass backend server delays to deliver a lightning fast, zero-latency user experience.",

    tech: ["HTML5", "CSS", "JavaScript", "Local Storage"],

    liveLink: "https://taskflowdaily.vercel.app/",
    caseStudy: "#",
  },
  
  {
    title: "Ziiii Studio",
    image: "/images/ziiiistudio.png",
    description:
      "A website focused on user flow, performance optimization, and strategic call-to-action placement.",

    details:
      "A high-fidelity minimalist landing page built for modern digital studios. Developed in Framer using modular component layouts and fluid responsive breakpoints to drastically decrease time-to-market while keeping brand presentation razor-sharp.",

    tech: ["Framer", "UI/UX Design", "Typography & Layout"],

    liveLink: "https://ziiiistudio.framer.website/",
    caseStudy: "#",
  },
  
  {
    title: "Personal Portfolio",
    image: "/images/tyrahdesign.png",
    description:
      "A personal portfolio website designed to showcase my work, skills, and experience as a web designer and developer.",

    details:
      "A custom developer portfolio engineered with Next.js and TypeScript for pristine type safety and server-side optimization. Styled cleanly with CSS Modules to showcase how structural simplicity can deliver blazing-fast page transitions and strong SEO foundations.",

    tech: ["Next.js", "TypeScript", "CSS Modules", "SEO Optimization"],

    liveLink: "#",
    caseStudy: "#",
  },
  {
    title: "Tifed Design",
    image: "/images/tifeddesign.png",
    description:
      "Designed and developed a futuristic portfolio showcasing AI-generated animations, cinematic storytelling and experimental visual creations.",

    details:
      "A personal portfolio platform created for an AI animator and visual storyteller to showcase creative projects, animation experiments and production processes. Built with a bold, dark visual identity, interactive layouts and a structured presentation that brings each creative work into focus",

    tech: ["Next.js", "React", "TypeScript", "CSS Modules"],

    liveLink: "https://tifeddesign.vercel.app/",
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