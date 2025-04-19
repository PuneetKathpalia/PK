import React from "react";
import { useLocation } from "react-router-dom";
import questions from "./data/softSkills";
import TestLayout from "../components/TestLayout";

const SoftSkillsTest = () => {
  const location = useLocation();
  const userData = location.state?.userData || JSON.parse(localStorage.getItem('userData'));

  return (
    <TestLayout 
      userData={userData} 
      questions={questions}
      testName="Soft Skills"
    />
  );
};

export default SoftSkillsTest;



