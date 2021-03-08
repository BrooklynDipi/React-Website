import EndScreen from "./end-screen";
import Stats from "./stats";
import TriviaItem from "./trivia-item";
import { useState } from "react";
import triviaData from "./trivia-data";

function Game(){
const [gameState, setGameState] = useState({
   score: 0,
   triviaIndex: 0,
   isGameOver: false,
});

    const { score, triviaIndex, isGameOver } = gameState;
    const questionNumber = triviaIndex + 1;
    const numQuestions = triviaData.length;


    const restartGame= () => {
        setGameState({
            score: 0,
            triviaIndex: 0,
            isGameOver: false
        })
    };

    const loadNextQuestion = () => {
        if (triviaIndex >= triviaData.length - 1) {
            setGameState({...gameState, isGameOver : true})
        } else {
            setGameState({...gameState, triviaIndex: triviaIndex + 1});
        }
    };

    const onAnswerSelected = (wasPlayerCorrect) => {
        if(wasPlayerCorrect) {
            setGameState({
                ...gameState,
                score: score + 1
                // if (difficulty === easy){
                //     score: score + 1
                // } else {
                //     if (difficulty === medium)
                //         score: score + 2
                // }
                // else {
                //     if (difficulty === hard)
                //         score: score + 3
                // }
            });
        }
    };

    let pageContent;
    if(isGameOver){
        pageContent = <EndScreen score={score} bestScore={0} onRetryClick={restartGame} />;
    } else {
        const triviaQuestion =  triviaData[triviaIndex];
        const {correct_answer, incorrect_answers, question, difficulty} = triviaQuestion;
        pageContent = <TriviaItem 
        difficulty={difficulty}
        key={triviaIndex}
        question={question} 
        correctAnswer={correct_answer} 
        incorrectAnswers={incorrect_answers} 
        onNextClick={loadNextQuestion}
        onAnswerSelected={onAnswerSelected}></TriviaItem>
    }
    
    return (
    
    <>
        <Stats score={score} questionNumber={questionNumber} totalQuestions={numQuestions}></Stats>
        {pageContent}
    </>
    );
}

export default Game;