import React from 'react'
import { useNavigate } from 'react-router-dom'

function QuizPage() {
 const navigate = useNavigate()
 const handleclick = () =>{
    navigate("/profile")
 }
  return (
    <div>
        QuizPage
      <button className='border-2' onClick={handleclick}>Profile</button>
    </div>
  )
}

export default QuizPage