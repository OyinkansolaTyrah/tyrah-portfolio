import styles from "./components/Achievements.module.css";

const achievements = [
    {
        title: "Performance Optimization",
        description: "Improved application performance, increasing load speeds by up to 40%",
    },
    {
        title: "Production-Ready Deliveries",
        description: "Delivered multiple robust, production-ready web applications from concept to deployment.",
    },
    {
        title: "Scaled Architecture",
        description: "Scaled applications to seamlessly support 20,000+ active users.",
    },
];

export default function Achievements () {
    return (
        <section
        className={styles.achievementsSection}>
            <h2 className={styles.achievementsTitle}>
                /key achievements
            </h2>
            <p className={styles.achievementsSubTitle}>
                Highlights of my technical impact and key milestones achieved.
            </p>

            <div className={styles.achievementsGrid}>
                {achievements.map((achievement) => (
                    <article className={styles.achievementCard}>
                        <div className={styles.achievementsInfo}>
                            <h3>{achievement.title}</h3>
                            <p>{achievement.description}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}