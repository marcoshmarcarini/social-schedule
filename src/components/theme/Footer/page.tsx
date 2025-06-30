import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        &copy; 2025. Site desenvolvido por Marcos Henrique Marcarini Junior.
        <br />
        Todos os direitos Reservados.
      </p>
    </div>
  );
}
