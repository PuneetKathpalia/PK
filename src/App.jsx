// import React, { useState, useEffect } from "react";
// import "./App.css";
// import questions from "./data/questions";
// import Login from "./components/Login";
// import analyticalSkills from "./data/analyticalSkills";
// import databaseConcepts from "./data/databaseConcepts";
// import softSkills from "./data/softSkills";
// import OOPS from "./data/OOPS";


// // Timer Component (keep this in App.jsx)
// const Timer = ({ duration }) => {
//   const [timeLeft, setTimeLeft] = useState(duration);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setTimeLeft((prevTime) => prevTime - 1);
//     }, 1000);

//     if (timeLeft <= 0) {
//       clearInterval(intervalId);
//     }

//     return () => clearInterval(intervalId);
//   }, [timeLeft]);

//   const minutes = Math.floor(timeLeft / 60);
//   const seconds = timeLeft % 60;

//   return (
//     <div className="timer">
//       <div className="time">{`${minutes < 10 ? "0" : ""}${minutes} : ${seconds < 10 ? "0" : ""}${seconds}`}</div>
//       <div className="label">min&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sec</div>
//     </div>
//   );
// };

// // Avatar Generator (keep this in App.jsx)
// const generateAvatar = (name) => {
//   const initials = name.split(" ").map((word) => word[0]).join("");
//   return (
//     <div className="avatar">
//       {initials}
//     </div>
//   );
// };

// function App() {

//   const [loggedIn, setLoggedIn] = useState(false);
//   const [name, setName] = useState('');
//   const [id, setId] = useState('');
//   const [duration, setDuration] = useState(60);
//   const [attempted, setAttempted] = useState(0);

//   // Handle Login
//   const handleLogin = (name, id, duration) => {
//     setName(name);
//     setId(id);
//     setDuration(duration);
//     setLoggedIn(true);
//   };


//   // Handle Answer Marking
//   const handleAnswerMark = () => {
//     setAttempted((prev) => prev + 1);
//   };

//   if (!loggedIn) {
//     return <Login onLogin={handleLogin} />;
//   }

//   return (
//     <div className="app">
//     {/* Topbar */}
//     <div className="topbar">
//     <div className="logo">
//   <img 
//     src="http://www.aon.com/siteImages/aon_logo.gif" 
//     alt="AON Logo" 
//     style={{ 
//       height: '40px',
//       margin: '10px' // This adds 10px margin on all sides
//     }} 
//   />
// </div>
//       <div className="candidate-timer">
//         <div className="candidate-info">
//           <div>
//             <strong>{name}</strong>
//             <br />
//             <small>Candidate ID: {id}</small>
//           </div>
//           <div className="avatar">{generateAvatar(name)}</div>
//         </div>
//         <Timer duration={duration} />
//       </div>
//     </div>

//       {/* Layout below topbar */}
//       <div className="main-content">
//         {/* Sidebar */}
//         <div className="sidebar">
//           <h3 style={{ color: "blue" }}>Sections</h3>
//           <div
//             style={{
//               backgroundColor: "#fef3cd",
//               padding: "10px",
//               borderLeft: "5px solid orange",
//             }}
//           >
//             <strong>01.Analytical Skills</strong>
//             <p style={{ margin: 0 }}>
//               {attempted < 10 ? `0${attempted} / 10` : '10 / 10'} attempted
//             </p>
//           </div>
//         </div>

//         {/* Questions */}
//         <div className="content-area">
//           {questions.map((q, index) => (
//             <div key={index} style={{ marginBottom: "20px" }}>
//               <strong>Q {index + 1}.</strong> {q.question}
//               <div>
//                 {q.options.map((option, optIndex) => (
//                   <label key={optIndex}>
//                     <input type="radio" name={`q${index}`} onClick={handleAnswerMark} /> {option}
//                     <br />
//                   </label>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;





// import React, { useState, useEffect } from "react";
// import "./App.css";

// import Login from "./components/Login";
// import analyticalSkills from "./data/analyticalSkills.js";
// import databaseConcepts from "./data/databaseConcepts.js";
// import softSkills from "./data/softSkills.js";
// import OOPS from "./data/OOPS.js";
// import paragraphTopic from "./data/paragraph"

// // Timer Component
// const Timer = ({ duration }) => {
//   const [timeLeft, setTimeLeft] = useState(duration);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setTimeLeft((prevTime) => prevTime - 1);
//     }, 1000);

//     if (timeLeft <= 0) {
//       clearInterval(intervalId);
//     }

//     return () => clearInterval(intervalId);
//   }, [timeLeft]);

//   const minutes = Math.floor(timeLeft / 60);
//   const seconds = timeLeft % 60;

//   return (
//     <div className="timer">
//       <div className="time">{`${minutes < 10 ? "0" : ""}${minutes} : ${
//         seconds < 10 ? "0" : ""
//       }${seconds}`}</div>
//       <div className="label">min&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sec</div>
//     </div>
//   );
// };

// // Avatar Generator
// const generateAvatar = (name) => {
//   const initials = name
//     .split(" ")
//     .map((word) => word[0])
//     .join("");
//   return <div className="avatar">{initials}</div>;
// };

// function App() {

//   const [loggedIn, setLoggedIn] = useState(false);
//   const [name, setName] = useState("");
//   const [id, setId] = useState("");
//   const [duration, setDuration] = useState(60);
//   const [topic, setTopic] = useState("analyticalSkills");
//   const [attempted, setAttempted] = useState(0);

//   // Get questions based on selected topic
//   const getQuestions = () => {
//     switch (topic) {
//       case "analyticalSkills":
//         return analyticalSkills;
//       case "databaseConcepts":
//         return databaseConcepts;
//       case "softSkills":
//         return softSkills;
//       case "OOPS":
//         return OOPS;
//       default:
//         return [];
//     }
//   };

//   const questions = getQuestions();

//   // Handle Login
//   const handleLogin = (name, id, duration, selectedTopic) => {
//     setName(name);
//     setId(id);
//     setDuration(duration);
//     setTopic(selectedTopic);
//     setLoggedIn(true);
//   };


//   // Handle Answer Marking
//   const handleAnswerMark = () => {
//     setAttempted((prev) => prev + 1);
//   };

//   if (!loggedIn) {
//     return <Login onLogin={handleLogin} />;
//   }

//   return (
//     <div className="app">
//       {/* Topbar */}
//       <div className="topbar">
//         <div className="logo">
//           <img
//             src="http://www.aon.com/siteImages/aon_logo.gif"
//             alt="AON Logo"
//             style={{
//               height: "40px",
//               margin: "10px",
//             }}
//           />
//         </div>
//         <div className="candidate-timer">
//           <div className="candidate-info">
//             <div>
//               <strong>{name}</strong>
//               <br />
//               <small>Candidate ID: {id}</small>
//             </div>
//             <div className="avatar">{generateAvatar(name)}</div>
//           </div>
//           <Timer duration={duration} />
//         </div>
//       </div>

//       {/* Main Layout */}
//       <div className="main-content">
//         {/* Sidebar */}
//         <div className="sidebar">
//           <h3 style={{ color: "blue" }}>Sections</h3>
//           <div
//             style={{
//               backgroundColor: "#fef3cd",
//               padding: "10px",
//               borderLeft: "5px solid orange",
//             }}
//           >
//             <strong>{`01. ${topic.replace(/([A-Z])/g, " $1")}`}</strong>
//             <p style={{ margin: 0 }}>
//               {attempted < questions.length
//                 ? `${attempted < 10 ? "0" : ""}${attempted} / ${questions.length}`
//                 : `${questions.length} / ${questions.length}`}{" "}
//               attempted
//             </p>
//           </div>
//         </div>

//         {/* Questions */}
//         <div className="content-area">
//         {questions.map((q, index) => (
//   <div key={index} className="question-block">
//     {/* <strong>Q {index + 1}.</strong> {q.question} */}
//     <strong>Q {String(index + 1).padStart(2, "0")}.</strong>{q.question}

//     <div>
//       {q.options.map((option, optIndex) => (
//         <label key={optIndex}>
//           <input type="radio" name={`q${index}`} onClick={handleAnswerMark} /> {option}
//           <br />
//         </label>
//       ))}
//               </div>
//               <button className="submit-button">Submit</button>
//             </div>
//           ))}
//         </div>
//       </div>
      
//   <footer className="footer">
//   ©2025 Aon plc. All rights reserved.
// </footer>
//     </div>
    
//   );
// }

// export default App;



import React, { useState, useEffect } from "react";
import "./App.css";

import Login from "./components/Login";
import analyticalSkills from "./data/analyticalSkills.js";
import databaseConcepts from "./data/databaseConcepts.js";
import softSkills from "./data/softSkills.js";
import OOPS from "./data/OOPS.js";
import paragraphTopic from "./data/paragraph";

// Timer Component
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
      <div className="time">{`${minutes < 10 ? "0" : ""}${minutes} : ${
        seconds < 10 ? "0" : ""
      }${seconds}`}</div>
      <div className="label">min&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sec</div>
    </div>
  );
};

// Avatar Generator
const generateAvatar = (name) => {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("");
  return <div className="avatar">{initials}</div>;
};

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [duration, setDuration] = useState(60);
  const [topic, setTopic] = useState("analyticalSkills");
  const [attempted, setAttempted] = useState(0);
  const [paragraphText, setParagraphText] = useState("");



  
  const getQuestions = () => {
    switch (topic) {
      case "analyticalSkills":
        return analyticalSkills;
      case "databaseConcepts":
        return databaseConcepts;
      case "softSkills":
        return softSkills;
      case "OOPS":
        return OOPS;
      default:
        return [];
    }
  };

  const questions = getQuestions();



  const handleLogin = (name, id, duration, selectedTopic) => {
    setName(name);
    setId(id);
    setDuration(duration);
    setTopic(selectedTopic);
    setLoggedIn(true);
  };



  const handleAnswerMark = () => {
    setAttempted((prev) => prev + 1);
  };

  if (!loggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
 
 
 <div className="app">
      <div className="topbar">
        <div className="logo">
          <img
            src="http://www.aon.com/siteImages/aon_logo.gif"
            alt="AON Logo"
            style={{ height: "40px", margin: "10px" }}
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

   
   
 
 
      <div className="main-content">
 
        <div className="sidebar">
          <h3 style={{ color: "blue" }}>Sections</h3>
          <div
            style={{
              backgroundColor: "#fef3cd",
              padding: "10px",
              borderLeft: "5px solid orange",
            }}
          >
            <strong>{`01. ${topic.replace(/([A-Z])/g, " $1")}`}</strong>
            <p style={{ margin: 0 }}>
              {topic === "paragraph"
                ? `${paragraphText.length} characters`
                : attempted < questions.length
                ? `${attempted < 10 ? "0" : ""}${attempted} / ${questions.length}`
                : `${questions.length} / ${questions.length}`} attempted
            </p>
          </div>
        </div>


        <div className="content-area">
          {topic === "paragraph" ? (
            <div>
              <h3>{paragraphTopic.title}</h3>
              <p>{paragraphTopic.instruction}</p>
              <textarea
                rows={10}
                style={{ width: "100%", padding: "10px", fontSize: "16px" }}
                placeholder="Write your essay here..."
                maxLength={1500}
                value={paragraphText}
                onChange={(e) => setParagraphText(e.target.value)}
              />
              <p style={{ textAlign: "right", fontSize: "14px" }}>
                Character Count: {paragraphText.length}
              </p>
              <button className="submit-button" style={{ backgroundColor: "purple", color: "white" }}>
                Submit
              </button>
            </div>
          ) : (
            questions.map((q, index) => (
              <div
                key={index}
                className="question-block"
                style={{
                  marginBottom: "20px",
                  borderBottom: "1px solid grey",
                  paddingBottom: "10px",
                }}
              >
                <strong>Q {String(index + 1).padStart(2, "0")}.</strong> {q.question}
                <div>
                  {q.options.map((option, optIndex) => (
                    <label key={optIndex}>
                      <input type="radio" name={`q${index}`} onClick={handleAnswerMark} /> {option}
                      <br />
                    </label>
                  ))}
                </div>
                <button className="submit-button" style={{ backgroundColor: "purple", color: "white" }}>
                  Submit
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      <footer className="footer">©2025 Aon plc. All rights reserved.</footer>
    </div>

  );
}

export default App;


