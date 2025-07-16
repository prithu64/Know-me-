import React, { useContext } from 'react'
import PlayerContext from '../context/PlayerContext'
import { useNavigate } from 'react-router-dom'

function ResultScreen() {
  const {setScore,score,player} = useContext(PlayerContext)
  const navigate = useNavigate()
  return (
    <div className='flex justify-center flex-col items-center h-screen gap-y-4'>
        <h1>
            {player}, Your score is  : {score}
        </h1> 

        <div className='flex flex-col gap-y-2'>
           <button className='border-2 p-2 cursor-pointer' onClick={()=>{
          navigate('/quizpage',{replace:true})
          setScore(0)
          }}>
            Play Again
         </button>
          <button className='border-2 p-2 cursor-pointer' onClick={()=>{
          navigate('/',{replace:true})
          setScore(0)
          }}>
           Home Page
         </button>
        </div>
       
    </div>
  )
}

export default ResultScreen