import { useState, useEffect } from 'react'
import './App.css'
import Quiz from './components/Quiz.jsx'


function getData() {
  return fetch("https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple")
    .then(res => res.json())
    .then(data => {
      return data // Return the data from the promise chain
    })
}

function formatQuestions(data) {
  return data.map((item) => {
    const answers = [item.correct_answer, ...item.incorrect_answers].map((answer, index) => ({
      answer: answer,
      dataset: `answer-${index}` // Replace "dataset" with your actual dataset value
    }));

    // Shuffle the answers array
    for (let i = answers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [answers[i], answers[j]] = [answers[j], answers[i]];
    }

    const correctAnswerIndex = answers.findIndex((answer) => answer.answer === item.correct_answer);

    return {
      question: item.question,
      answers: answers,
      correctAnswerIndex: correctAnswerIndex,
      selected: false
    };
  });
}



function App() {


  const [questions, setQuestions] = useState([])



  useEffect(() => {
    getData().then(data => {
      const formattedQuestions = formatQuestions(data.results)
      setQuestions(formattedQuestions)
    })
  }, [])


  
  const quizElements = questions.map((question, index) => (
    <Quiz key={index} 
    question={question}
    />
  ))
  

  

  return (
    <>
    <div>{quizElements}</div>
     
    </>
  )
}

export default App
