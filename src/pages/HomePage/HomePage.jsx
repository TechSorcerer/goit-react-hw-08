import styles from "./HomePage.module.css";

const HomePage = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>Welcome to the Contacts App </h1>
    <h2 className={styles.desc}>📱</h2>
    <p className={styles.text}>
      This is a simple application to manage your contacts.
    </p>
  </div>
);

export default HomePage;
