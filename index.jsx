// pages/index.js
import Head from 'next/head';
import styles from '../styles.module.css';

const Home = () => {
    return (
        <div>
            <Head>
                <title>Your Name - Portfolio</title>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" />
            </Head>

            <header className={styles.header}>
                <h1>Your Name</h1>
                <p>Web Developer | Designer</p>
            </header>

            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>

            <section className={styles.section}>
                <h2>About Me</h2>
                <p>Write a brief introduction about yourself here.</p>

                <h2>Skills</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    {/* Add more skills as needed */}
                </ul>

                <h2>Projects</h2>
                {/* Add details about your projects here */}

                <h2>Contact</h2>
                <p>Email: your.email@example.com</p>
                <p>LinkedIn: <a href="https://www.linkedin.com/in/yourlinkedin" target="_blank">Your LinkedIn</a></p>
                <p>GitHub: <a href="https://github.com/yourgithub" target="_blank">Your GitHub</a></p>
            </section>

            <footer className={styles.footer}>
                <p>&copy; 2024 Your Name. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;