import React from "react";
import { Link } from 'react-router-dom';

const Home = () => {
  
  const handleClearLocalStorage = () => {
    localStorage.removeItem("totalCorrectAnswers");
    localStorage.removeItem("totalWrongAnswers");
    localStorage.removeItem("totalAttemptedQuestions");
  };

  return (
    <div style={{marginTop:"230px"}} className="App">
      <h2 className="homeText">Quiz App</h2>
      <Link to="/Quiz">
        <button style={{width:"200px",marginTop:"100px"}} onClick={handleClearLocalStorage} className="btn">
          Play
        </button>
      </Link>
    </div>
  );
}

export default Home;



