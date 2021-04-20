import { useEffect, useState } from "react";

function useGetTrivaData(amount = 10, difficulty = ""){
    const [quizFetch, setQuizFetch] = useState({
        isLoading: true, 
        ErrorMessage: "",
        data: null,
  
    });
  
    useEffect(() => {
      async function getQuiz(){
        try {
          const params = new URLSearchParams({amount, type: "multiple" });
          if (difficulty !== "") params.append("difficulty", difficulty);
          const url = `https://opentdb.com/api.php?${params.toString()}`;
          const response = await fetch(url);
  
  
        if (!response.ok){
          throw new Error(`Something went wrong!`)
        }
  
        const json = await response.json();
        const { response_code, results } = json;
  
        if (response_code === 1){
          throw new Error("Bad API Request - no results!");
        } else if (response_code === 2) {
          throw new Error("Bad AP Request - invalid!");
        }
  
        setQuizFetch({
          isLoading: false,
          errorMessage: "",
          data: results,
        });
      } catch (err){      
        setQuizFetch({
          isLoading: false,
          errorMessage: "Something went wrong loading the Quiz, please try again!",
          data: null,
  
      });
      console.error(err);
        }
      }
      getQuiz();
    }, [amount, difficulty]);

    const {isLoading, errorMessage, data} = quizFetch;
    return {isLoading, errorMessage, data};
}

export default useGetTrivaData;