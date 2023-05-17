export default function Quiz(props) {
    
  
    return (
      <>
      <h1>{props.question.question}</h1>
       <p>{props.question.answers}</p>
      </>
    )
  }