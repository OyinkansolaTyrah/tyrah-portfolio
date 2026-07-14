import styles from "./components/Contact.module.css";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const contacts = [
  {
    icon: <MdEmail />,
    title: "Email",
    text: "musiliuoyinkansolatyrah@gmail.com",
    link: "mailto:musiliuoyinkansolatyrah@gmail.com",
  },
  {
    icon: <FaLinkedin />,
    title: "LinkedIn",
    text: "LinkedIn",
    link: "https://linkedin.com/in/rukayatmusiliu",
  },
  {
    icon: <FaGithub />,
    title: "GitHub",
    text: "GitHub",
    link: "https://github.com/yourusername",
  },
];

export default function Contact () {
    return (
        <section
        className={styles.contactSection} id="contact">
            <h2 className={styles.contactTitle}>
                / get in touch
            </h2>
            <p className={styles.contactSubTitle}>
                Feel free to reach out to me for any questions, project inquiries, or just to say hello! I'm always open to discussing new projects and opportunities.
            </p>

            <div className={styles.contactButtons}>
                {contacts.map((contact) => (
                    <a
                    key={contact.title}
                    href={contact.link}
                    className={styles.contactButton}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        {contact.icon}
                        {contact.text}
                    </a>
                ))}
            </div>

        </section>
    )
}