import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <>
      <div className={styles.Footer}>
        <span>Kontakt</span>
        <span>Vanliga frågor</span>
        <span>Sociala medier</span>
      </div>
    </>
  );
}