import React from "react";
import { useLocation } from "react-router-dom";
import questions from "../data/osConcepts";
import TestLayout from "../components/TestLayout";

const OSConceptsTest = () => {
  const location = useLocation();
  const userData = location.state?.userData || JSON.parse(localStorage.getItem('userData'));

  return (
    <TestLayout 
      userData={userData} 
      questions={questions}
      testName="OS Concepts"
    />
  );
};

export default OSConceptsTest;