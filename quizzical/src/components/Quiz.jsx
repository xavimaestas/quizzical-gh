import { useState, useEffect } from 'react'

export default function Quiz(props) {

    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [correctAnswer, setCorrectAnswer] = useState(false)


    useEffect(() => {
        if(selectedAnswer === 'answer-0'){
            setCorrectAnswer(true)
        } else {
        }
    },[selectedAnswer, correctAnswer])



    function handleAnswerClick(e){
        const selected = e.target.dataset.answer

        setSelectedAnswer(selected)
        
        
    }
    
  
    return (
      <>
      <h1>{props.question.question}</h1>
      {props.question.answers.map((answer, index) => (
          <p  
          onClick={handleAnswerClick} 
          key={index}
          data-answer={answer.dataset}
          className={selectedAnswer === answer.dataset ? "selected" : ""}
          >{answer.answer} </p>
        ))}
      </>
    )
  }