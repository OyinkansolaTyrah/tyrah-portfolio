import { Space_Mono } from "next/font/google";
import styles from "./components/Achievements.module.css";
import {
  LuGauge,
  LuCircleCheckBig,
  LuNetwork,
} from "react-icons/lu";

const achievements = [
    {
        icon: <LuGauge />,
        title: "Performance-First Execution",
        description: "I write lightweight, modern CSS and Javascript to minimize browser rendering lag, keeping your page load times low and your conversion rates high.",
    },
    {
        icon: <LuCircleCheckBig />,
        title: "Zero-Friction UI/UX",
        description: "Every button layout, navigation flow, and mobile responsive breakpoint is intentionally engineered to reduce user drop-off and maximize engagement.",
    },
    {
        icon: <LuNetwork />,
        title: "Hybrid Architecture (Framer + Code)",
        description: "I choose the right tool for the job. Need a stunning, pixel-perfectmarketing landing page in days? I build it in Framer. Need a complex, interactive web application? I code it from scratch in Next.js.",
    },
];

export default function Achievements () {
    return (
        <section
        className={styles.achievementsSection}>
            <h2 className={styles.achievementsTitle}>
                /engineering for impact
            </h2>
            <p className={styles.achievementsSubTitle}>
                In a world full of slow, buggy prototypes, 
                I focus on building digital products that survive 
                the real world. Here is how I protect your business:
            </p>

            <div className={styles.achievementsGrid}>
                {achievements.map((achievement) => (
                    <article className={styles.achievementCard}>
                        <div className={styles.achievementsInfo}>
                            {achievement.icon}
                            <h3>{achievement.title}</h3>
                            <p>{achievement.description}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}