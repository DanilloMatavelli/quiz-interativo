import styles from "./QuestionCard.module.css";

function QuestionCard({ question, onAnswer }) {
  if (!question) return null; 

  const opcoes = ["A", "B", "C", "D", "E"];

  return (
    <div className={styles.card}>
      <h2>{question.question}</h2>
      <div className={styles.options}>
        {question.options.map((option, index) => (
          <button
            key={index}
            className={styles.option}
            onClick={() => onAnswer(option)}
          >
            {opcoes[index]}) {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;