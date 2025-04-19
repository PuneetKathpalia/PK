import React from "react";
import { useLocation } from "react-router-dom";
import questions from "./data/OOPS";
import TestLayout from "../components/TestLayout";

const OOPSTest = () => {
  const location = useLocation();
  const userData = location.state?.userData || JSON.parse(localStorage.getItem('userData'));

  return (
    <TestLayout 
      userData={userData} 
      questions={questions}
      testName="OOPS Concepts"
    />
  );
};

export default OOPSTest;