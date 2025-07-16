import { useState } from 'react'
import QuestionCard from '../components/QuestionCard'
import { QuizData } from '../data/question' 
import { useNavigate } from 'react-router-dom'

function QuizPage() {

  const [currentIndex,setCurrentIndex] = useState(0)
  const [value , setValue] = useState("")
  const [btnStatus , setbtnStatus] = useState(false)
  const navigate = useNavigate()
  

  const toggleBtnStatus = ()=>{
    setbtnStatus(prev => !prev)
  }

  const handleNextButton = ()=>{     
    if(currentIndex < QuizData.length -1 ){
      setCurrentIndex(currentIndex + 1)
    }else{
      alert("Finished") 
      navigate('/result',{replace:true})
    }
  }

 

  
  return (
    <div className='flex justify-center items-center h-screen'>  

       <QuestionCard 
       id={QuizData[currentIndex].id}
       question={QuizData[currentIndex].question} 
       options={QuizData[currentIndex].options} 
       handleNext={handleNextButton}
       toggleBtnStatus={toggleBtnStatus}
       btnStatus={btnStatus}
       answer={QuizData[currentIndex].answer}
      />

    </div>
  )
}



export default QuizPage