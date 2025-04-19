import React, { useState, useEffect } from "react";
import "./App.css";
import questions from "./data/questions";
import Login from "./components/Login";

// Timer Component (keep this in App.jsx)
const Timer = ({ duration }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    if (timeLeft <= 0) {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="timer">
      <div className="time">{`${minutes < 10 ? "0" : ""}${minutes} : ${seconds < 10 ? "0" : ""}${seconds}`}</div>
      <div className="label">min&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sec</div>
    </div>
  );
};

// Avatar Generator (keep this in App.jsx)
const generateAvatar = (name) => {
  const initials = name.split(" ").map((word) => word[0]).join("");
  return (
    <div className="avatar">
      {initials}
    </div>
  );
};

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [duration, setDuration] = useState(60);
  const [attempted, setAttempted] = useState(0);

  // Handle Login
  const handleLogin = (name, id, duration) => {
    setName(name);
    setId(id);
    setDuration(duration);
    setLoggedIn(true);
  };


  // Handle Answer Marking
  const handleAnswerMark = () => {
    setAttempted((prev) => prev + 1);
  };

  if (!loggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="app">
    {/* Topbar */}
    <div className="topbar">
    <div className="logo">
  <img 
    src="http://www.aon.com/siteImages/aon_logo.gif" 
    alt="AON Logo" 
    style={{ 
      height: '40px',
      margin: '10px' // This adds 10px margin on all sides
    }} 
  />
</div>
      <div className="candidate-timer">
        <div className="candidate-info">
          <div>
            <strong>{name}</strong>
            <br />
            <small>Candidate ID: {id}</small>
          </div>
          <div className="avatar">{generateAvatar(name)}</div>
        </div>
        <Timer duration={duration} />
      </div>
    </div>

      {/* Layout below topbar */}
      <div className="main-content">
        {/* Sidebar */}
        <div className="sidebar">
          <h3 style={{ color: "blue" }}>Sections</h3>
          <div
            style={{
              backgroundColor: "#fef3cd",
              padding: "10px",
              borderLeft: "5px solid orange",
            }}
          >
            <strong>01.Analytical Skills</strong>
            <p style={{ margin: 0 }}>
              {attempted < 10 ? `0${attempted} / 10` : '10 / 10'} attempted
            </p>
          </div>
        </div>

        {/* Questions */}
        <div className="content-area">
          {questions.map((q, index) => (
            <div key={index} style={{ marginBottom: "20px" }}>
              <strong>Q {index + 1}.</strong> {q.question}
              <div>
                {q.options.map((option, optIndex) => (
                  <label key={optIndex}>
                    <input type="radio" name={`q${index}`} onClick={handleAnswerMark} /> {option}
                    <br />
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;


