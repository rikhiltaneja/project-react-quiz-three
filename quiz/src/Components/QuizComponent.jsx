import React, { useState } from "react";
import "../App.css"; 
import quizData from "../resources/quizQuestion.json";
import { useNavigate } from "react-router-dom";

const QuizComponent = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [attemptedQuestions, setAttemptedQuestions] = useState(0);

  
  const handleNextClick = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevClick = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };

  const handleQuitClick = () => {
    if (window.confirm("Are you sure you want to quit?")) {
      navigate("/result");
    }
  };

  const handleFinishClick = () => {
    localStorage.setItem("totalCorrectAnswers", correctAnswers.toString());
    localStorage.setItem("totalWrongAnswers", wrongAnswers.toString());
    localStorage.setItem("totalAttemptedQuestions", attemptedQuestions.toString());
    navigate("/result");
  };

  const handleAnswerClick = (selectedOption) => {
    const currentQuestion = quizData[currentQuestionIndex];
    if (currentQuestionIndex === 14) {
      localStorage.setItem("totalCorrectAnswers", correctAnswers.toString());
      localStorage.setItem("totalWrongAnswers", wrongAnswers.toString());
      localStorage.setItem("totalAttemptedQuestions", attemptedQuestions.toString());
      navigate("/result");
      return; 
    }

    const correctAnswer = currentQuestion.answer;

    setAttemptedQuestions((prevAttempts) => prevAttempts + 1);

    if (selectedOption === correctAnswer) {
      alert("Correct Answer")
      setCorrectAnswers((prevCorrect) => prevCorrect + 1);
    } else {
      alert("Wrong Answer")
      setWrongAnswers((prevWrong) => prevWrong + 1);
    }

    handleNextClick();
  };
  
  const currentQuestion = quizData[currentQuestionIndex];


  return (
    <div>
      <div className="QuizPage">
        <h2>Question</h2>
        <h5>{`${currentQuestionIndex + 1} of ${quizData.length}`}</h5>
        <h3>{currentQuestion.question}</h3>
        <div className="grid">
          <button onClick={() => handleAnswerClick(currentQuestion.optionA)}>
            {currentQuestion.optionA}
          </button>
          <button onClick={() => handleAnswerClick(currentQuestion.optionB)}>
            {currentQuestion.optionB}
          </button>
          <button onClick={() => handleAnswerClick(currentQuestion.optionC)}>
            {currentQuestion.optionC}
          </button>
          <button onClick={() => handleAnswerClick(currentQuestion.optionD)}>
            {currentQuestion.optionD}
          </button>
        </div>
        <div style={{margin:"50px auto"}} className="flex align">
          <button id="blue" onClick={handlePrevClick} disabled={currentQuestionIndex === 0}>
            Previous
          </button>
          <button id="green" onClick={handleNextClick} disabled={currentQuestionIndex === quizData.length - 1}>
            Next
          </button>
          <button id="red" onClick={handleQuitClick}>
            Quit
          </button>
          <button id="submit" onClick={handleFinishClick}>
            Finish
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizComponent;
