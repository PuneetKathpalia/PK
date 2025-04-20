// import React, { useState } from "react";
// import "./Login.css";

// const Login = ({ onLogin }) => {
//   const [name, setName] = useState("");
//   const [id, setId] = useState("");
//   const [duration, setDuration] = useState(60);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onLogin(name, id, duration * 60); // Convert minutes to seconds
//   };

//   return (
//     <div className="login-container">
//       <form onSubmit={handleSubmit} className="login-form">
//         <div className="logo-container">
//           <img 
//             src="http://www.aon.com/siteImages/aon_logo.gif" 
//             alt="AON Logo" 
//             className="logo" 
//           />
//         </div>
//         <h2>Assessment Login</h2>
//         <div className="form-group">
//           <label>Name:</label>
//           <input 
//             type="text" 
//             value={name} 
//             onChange={(e) => setName(e.target.value)} 
//             required 
//           />
//         </div>
//         <div className="form-group">
//           <label>Candidate ID:</label>
//           <input 
//             type="text" 
//             value={id} 
//             onChange={(e) => setId(e.target.value)} 
//             required 
//           />
//         </div>
//         <div className="form-group">
//           <label>Test Duration (minutes):</label>
//           <input 
//             type="number" 
//             value={duration} 
//             onChange={(e) => setDuration(e.target.value)}
//             min="1"
//             required
//           />
//         </div>
//         <button type="submit" className="login-button">Start Assessment</button>
//       </form>
//     </div>
//   );
// };

// export default Login;


// import React, { useState } from "react";
// import "./Login.css";

// const Login = ({ onLogin }) => {
//   const [name, setName] = useState("");
//   const [id, setId] = useState("");
//   const [duration, setDuration] = useState(60);
//   const [selectedTopic, setSelectedTopic] = useState("analyticalSkills");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onLogin(name, id, duration * 60, selectedTopic); // Include topic
//   };

//   return (
//     <div className="login-container">
//       <form onSubmit={handleSubmit} className="login-form">
//         <div className="logo-container">
//           <img 
//             src="http://www.aon.com/siteImages/aon_logo.gif" 
//             alt="AON Logo" 
//             className="logo" 
//           />
//         </div>
//         <h2>Assessment Login</h2>

//         <div className="form-group">
//           <label>Name:</label>
//           <input 
//             type="text" 
//             value={name} 
//             onChange={(e) => setName(e.target.value)} 
//             required 
//           />
//         </div>

//         <div className="form-group">
//           <label>Candidate ID:</label>
//           <input 
//             type="text" 
//             value={id} 
//             onChange={(e) => setId(e.target.value)} 
//             required 
//           />
//         </div>

//         <div className="form-group">
//           <label>Test Duration (minutes):</label>
//           <input 
//             type="number" 
//             value={duration} 
//             onChange={(e) => setDuration(e.target.value)}
//             min="1"
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Select Test Topic:</label>
//           <select 
//             value={selectedTopic} 
//             onChange={(e) => setSelectedTopic(e.target.value)}
//             required
//           >
//             <option value="analyticalSkills">Analytical Skills</option>
//             <option value="databaseConcepts">Database Concepts</option>
//             <option value="softSkills">Soft Skills</option>
//             <option value="OOPS">OOPS</option>
//           </select>
//         </div>

//         <button type="submit" className="login-button">Start Assessment</button>
//       </form>
//     </div>
//   );
// };

// export default Login;



import React, { useState } from "react";
import "./Login.css";

const Login = ({ onLogin }) => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [duration, setDuration] = useState(60);
  const [selectedTopic, setSelectedTopic] = useState("analyticalSkills");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(name, id, duration * 60, selectedTopic); // Pass topic to parent
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <div className="logo-container">
          <img 
            src="http://www.aon.com/siteImages/aon_logo.gif" 
            alt="AON Logo" 
            className="logo" 
          />
        </div>

        <h2>Assessment Login</h2>

        <div className="form-group">
          <label>Name:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>

        <div className="form-group">
          <label>Candidate ID:</label>
          <input 
            type="text" 
            value={id} 
            onChange={(e) => setId(e.target.value)} 
            required 
          />
        </div>

        <div className="form-group">
          <label>Test Duration (minutes):</label>
          <input 
            type="number" 
            value={duration} 
            onChange={(e) => setDuration(e.target.value)}
            min="1"
            required
          />
        </div>

        <div className="form-group">
          <label>Select Test Topic:</label>
          <select 
            value={selectedTopic} 
            onChange={(e) => setSelectedTopic(e.target.value)}
            required
          >
            <option value="analyticalSkills">Analytical Skills</option>
            <option value="databaseConcepts">Database Concepts</option>
            <option value="softSkills">Soft Skills</option>
            <option value="OOPS">OOPS</option>
            <option value="paragraph">Paragraph</option>
          </select>
        </div>
        
        <button type="submit" className="login-button">Start Assessment</button>
      </form>
    </div>
  );
};

export default Login;
