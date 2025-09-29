import { useState } from "react";
import QuestionCard from "./components/QuestionCard";
import questions from "./data/questions";
import Header from "./components/Header";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleAnswer = (answer) => {

    setCurrentIndex(currentIndex + 1);
  };

  return (
    <><Header />
    <div>
      <QuestionCard
        question={questions[currentIndex]}
        onAnswer={handleAnswer} />
    </div></>
  );
}

export default App;