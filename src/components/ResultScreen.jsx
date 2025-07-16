import { useContext } from 'react'
import PlayerContext from '../context/PlayerContext'
import { useNavigate } from 'react-router-dom'

function ResultScreen() {
  const {setScore,score,player} = useContext(PlayerContext)
  const navigate = useNavigate()
  return (
    <div className='flex justify-center flex-col items-center h-screen gap-y-4'>
        <h1 className='text-2xl'>
            {player}, Your score is  : {score}
        </h1> 
         
         <div className='text-center text-xl'>
          {
            score <= 5? "Do you really know me bro ?😒": "You the homie 🤗"
          }
         </div>
         
        <div className='flex  gap-4'>
           <button className='border-2 p-2 cursor-pointer rounded-sm hover:bg-white hover:text-black hover:border-white duration-200' onClick={()=>{
          navigate('/quizpage',{replace:true})
          setScore(0)
          }}>
            Play Again
         </button>
          <button className='border-2 p-2 cursor-pointer rounded-sm hover:bg-white hover:text-black hover:border-white duration-200' onClick={()=>{
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