import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";

export default function Header({}) {
  const [timeAtual, setTimeAtual] = useState(0);

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>React Quiz</h1>

      <div className={styles.informacoes}>
        <p>
          Questão <span></span> 
        </p>
        <p>Tempo gasto: </p>
      </div>
    </header>
  );
}












