import { useContext, useState } from "react"
import PlayerContext from "../context/PlayerContext"
import { useNavigate } from "react-router-dom"

function Home() {

  const [user,setUser] = useState('')
  const [isDisabled,setDisabled] = useState(true)
  const navigate = useNavigate();
  
  const {setPlayer} = useContext(PlayerContext)

  const handleSubmit = (e)=>{
     e.preventDefault()
     setPlayer(user)
     handleNavigate()
  }

  const handleNavigate = ()=>{
   navigate('/quizpage',{replace:true})
  }

  return (
    <div className='flex justify-center items-center h-screen  text-center '>
       <div className="border-1 p-4 sm:p-6">
          <h1 className="text-2xl mb-4 md:text-3xl"><i>DO YOU EVEN KNOW ME?</i></h1>
          <p className="text-sm mb-4">take a small quiz, let's see if you can figure me out </p>
          <div className="mb-5">
                      <h1 className="mb-1 text-sm">Enter your name to begin</h1>
                     <input type="text"  placeholder="name" className="border border-2  px-2 py-1 rounded-md outline-none" 
                          value={user}
                          onChange={
                          (e)=>{                           //if the name is of length 3 or more then only the 
                            setUser(e.target.value)        // the user can begin the quiz
                            if(e.target.value.length >=3){
                                setDisabled(false)
                            }else{
                                setDisabled(true)
                            }
                              
                        }
                     } />
           </div>
           <button 
             className={`border px-3 py-1 rounded-md ${isDisabled?"cursor-not-allowed opacity-50" :" cursor-pointer "} `} 
             disabled={isDisabled} 
             onClick={handleSubmit}>
              Begin
           </button>
       </div>
    </div>
  )
}

export default Home