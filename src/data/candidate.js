const generateCandidateID = () => {
    return Math.floor(10000000 + Math.random() * 90000000); // 8-digit ID
  };
  
  const candidate = {
    name: "Puneet Kathpalia",
    id: generateCandidateID(),
  };
  
  export default candidate;
  