import styles from "./Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className={styles.menu_container}>
      <ul className={styles.menu_list}>
        <li className={styles.menu_item}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.menu_item}>
          <Link href="/login">Login</Link>
        </li>
        <li className={styles.menu_item}>
          <Link href="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </div>
  );
}
