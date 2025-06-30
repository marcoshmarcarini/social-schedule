"use client";
import styles from "./Dashboard.module.css";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Dashboard() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Carregando...</p>;

  return session ? (
    <>
      <div className={styles.container}>
        <h1>Dashboard</h1>
        <button onClick={() => signOut()}>Desconectar</button>
      </div>
    </>
  ) : (
    <button onClick={() => signIn("facebook")}>Conectar</button>
  );
}
