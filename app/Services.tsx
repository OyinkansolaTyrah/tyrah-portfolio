"use client";

import { useState } from "react";
import styles from "./components/Services.module.css";

export default function Services() {
  const [activeService, setActiveService] = useState("uiux");

  const services = {
    uiux: {
        title: "UI/UX Design",
        description:
        "I design intuitive digital experiences that help businesses engage users and guide them toward meaningful actions. Every interface is carefully planned to balance aesthetics, usability, and business goals.",

        points: [
        "User-centered interface design",
        "Wireframing and prototyping",
        "Mobile-first design approach",
        "Design systems and style guides",
        "Conversion-focused layouts"
        ]
    },

    frontend: {
        title: "Frontend Development",
        description:
        "I build fast, responsive, and accessible websites using modern frontend technologies. My focus is creating seamless user experiences that perform well across all devices and browsers.",

        points: [
        "Responsive website development",
        "React and Next.js applications",
        "TypeScript implementation",
        "Performance optimization",
        "Accessibility best practices"
        ]
    },

    wordpress: {
        title: "WordPress Development",
        description:
        "I create professional WordPress websites that are easy to manage, scalable, and optimized for business growth. From landing pages to complete business websites, I ensure a smooth user experience and strong performance.",

        points: [
        "Custom WordPress websites",
        "Theme customization",
        "Website migration",
        "SEO-friendly structure",
        "Ongoing maintenance support"
        ]
    },

    optimization: {
        title: "Website Optimization & SEO",
        description:
        "A beautiful website is ineffective if people cannot find it or if it loads slowly. I help improve visibility, speed, and overall performance to maximize business results.",

        points: [
        "Technical SEO improvements",
        "Page speed optimization",
        "Core Web Vitals enhancements",
        "Mobile responsiveness audits",
        "Conversion rate improvements"
        ]
    }
};

  return (
    <section className={styles.servicesSection} id="services">

      <h2 className={styles.sectionTitle}>
        /services
      </h2>

      <div className={styles.servicesContainer}>

        <div className={styles.servicesMenu}>

          <button
            onClick={() => setActiveService("uiux")}
            className={activeService === "uiux" ? styles.active : ""}
          >
            UI/UX Design
          </button>

          <button
            onClick={() => setActiveService("frontend")}
            className={activeService === "frontend" ? styles.active : ""}
          >
            Frontend Developer
          </button>

          <button
            onClick={() => setActiveService("wordpress")}
            className={activeService === "wordpress" ? styles.active : ""}
          >
            WordPress Developer
          </button>

          <button
            onClick={() => setActiveService("optimization")}
            className={activeService === "optimization" ? styles.active : ""}
          >
            Optimization
          </button>

        </div>

        <div className={styles.serviceContent}>

          <h3>
            {services[activeService as keyof typeof services].title}
          </h3>

          <p>
            {services[activeService as keyof typeof services].description}
          </p>

          <ul className={styles.serviceList}>
            {services[activeService as keyof typeof services].points.map(
                (point) => (
                    <li key={point}>{point}</li>
                )
            )}
          </ul>

        </div>

      </div>

    </section>
  );
}