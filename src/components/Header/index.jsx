import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import QuestionCard from "../QuestionCard";

export default function Header({ currentQuestion, totalQuestions }) {
  const [timeAtual, setTimeAtual] = useState(0);

  useEffect(() => {
    setTimeAtual(0);
  }, [currentQuestion]);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeAtual((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Quiz Interativo</h1>

      <div className={styles.informacoes}>
        <p>
          Questão <span>{currentQuestion}</span> / 10
        </p>
        <p>Tempo gasto: {timeAtual}s</p>
      </div>
    </header>
  );
}









