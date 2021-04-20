import Game from "./game";
import { useState, useEffect } from "react";
import LoadingSpinner from "../common/loading-spinner";
import ErrorMessage from "../common/error-message";
import useGetTrivaData from "./hooks/use-get-trivia-data";

function QuizPage() {
  const {isLoading, errorMessage, data} = useGetTrivaData(12, "easy");
 
  let contents;
  if (isLoading) contents = <LoadingSpinner />;
  else if (errorMessage !== "") contents = <ErrorMessage>{errorMessage}</ErrorMessage>
  else contents = <Game triviaData={data}/>;

  return (
    <main>{contents}</main>
  );
}

export default QuizPage;
