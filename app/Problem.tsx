import styles from "./components/Problem.module.css";
import {
FiSearch,
FiSmartphone,
FiZap,
FiMousePointer
} from "react-icons/fi";

export default function Problem () {
    return (
        <section className={styles.problemSection}>

            <h2 className={styles.problemTitle}>
                /what's holding most websites back
            </h2>

            <p className={styles.problemDescription}>
                Many businesses invest in websites expecting more leads,
                sales, and visibility online, yet their websites often fail
                to deliver meaningful results. The problem is rarely the
                business itself—it is usually the website experience.
                Slow loading times, poor mobile responsiveness, weak SEO,
                confusing navigation, inconsistent branding, and a lack of
                clear calls to action can drive visitors away before they
                become customers.
            </p>

            <div className={styles.problemGrid}>

                <div className={styles.problemCard}>
                Poor User Experience
                </div>

                <div className={styles.problemCard}>
                Slow Loading Speed
                </div>

                <div className={styles.problemCard}>
                Weak SEO Strategy
                </div>

                <div className={styles.problemCard}>
                No Clear Call-To-Action
                </div>

                <div className={styles.problemCard}>
                Poor Mobile Responsiveness
                </div>

                <div className={styles.problemCard}>
                Outdated Design
                </div>

            </div>

        </section>
    );
}

