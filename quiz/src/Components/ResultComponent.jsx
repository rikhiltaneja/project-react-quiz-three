import React from "react";
import "../App.css"
import quizData from "../resources/quizQuestion.json";
import { Link } from "react-router-dom";

const Result = () => {


  const totalQuestions = quizData.length;
  const correctAnswers = parseInt(localStorage.getItem("totalCorrectAnswers")) || 0;
  const wrongAnswers = parseInt(localStorage.getItem("totalWrongAnswers")) || 0;
  const attemptedQuestions = parseInt(localStorage.getItem("totalAttemptedQuestions")) || 0;

  

  return (
    <div className="ResultPage">
      <h2>Result</h2>
      <div className="Page">
        <h3>You need more practice!</h3>
        <h1>Your Score is {correctAnswers}</h1>
        <div className="flex around">
          <div>
            <h4>Total number of questions</h4>
            <h4>Numbers of attempted questions</h4>
            <h4>Numbers of correct answers</h4>
            <h4>Number of wrong answers</h4>  
          </div>
          <div>
            <p>{totalQuestions}</p>
            <p>{attemptedQuestions}</p>
            <p>{correctAnswers}</p>
            <p>{wrongAnswers}</p>
          </div>
        </div>
      <div className="flex btnClick" style={{margin:"10px 120px"}}>
        <Link to="/Quiz">
          <button id="blue">Play Again</button>
        </Link>
        <Link to="/">
            <button id="submit">Back to Home</button>
        </Link>
      </div>
      </div>
    </div>
  );
};


export default Result;
