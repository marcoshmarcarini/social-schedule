"use client";
import React, { useState } from "react";
import styles from "./Login.module.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(email, password);
  };

  return (
    <div className={styles.login_content}>
      <h1 className={styles.login_title}>Entre com suas credenciais</h1>
      <form action="" onSubmit={handleSubmit} className={styles.login_form}>
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className={styles.form_input}
        />
        <input
          type="password"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
          className={styles.form_input}
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
