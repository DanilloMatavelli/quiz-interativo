import { useState } from "react";
import Header from "./components/Header";
import QuestionCard from "./components/QuestionCard";
import questions from "./data/questions";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleAnswer = (answer) => {
    setCurrentIndex(prev => prev + 1); // avança a questão
  };

  return (
    <div>
      <Header currentQuestion={currentIndex + 1} />
      <QuestionCard 
        question={questions[currentIndex]} 
        onAnswer={handleAnswer} 
      />
    </div>
  );
}

export default App;

// deixe o css assim do header 