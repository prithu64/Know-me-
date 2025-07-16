import { useContext, useEffect, useState } from "react"
import PlayerContext from "../context/PlayerContext"


function QuestionCard({id,question,options,handleNext,answer}) {
   
  const [OptionbuttonIndex,setOptionButtonIndex] = useState(null)  
  const {setScore} = useContext(PlayerContext)
  const [submitStatus,setsubmitStatus] = useState(false)
  const [Lock,setLock] = useState(false)

 
  const HandleOptionClick = (index) =>{
    setOptionButtonIndex(index)

  }

  const toggleSubmit = ()=>{
   if(OptionbuttonIndex !== null && !submitStatus){   
     if(options[OptionbuttonIndex] === answer){
      setScore((prev)=>prev +1)
     }
     setsubmitStatus(true)
     setLock(true)
   }
  }

useEffect(()=>{
    setOptionButtonIndex(null)
    setsubmitStatus(false)
    setLock(false)
},[question])
     
  return (
 <div>
    <div className="flex flex-col gap-y-7 max-w-5xl">

        <div>
        
          {/*Question div */}
            <h1 className="text-3xl md:text-4xl text-center"> {id}. {question} </h1>
        </div>

        <div className="grid justify-center ">
          {/* Options div*/}
            {options.map((option,index)=>{

                 const isSelected = OptionbuttonIndex === index;
                 const isCorrect = option === answer;

                 let btnCls = "border w-[330px] h-[50px] m-1 rounded-sm outline-none "  //define a btn class like this , much easier to implement with conditions

                 if(isSelected && submitStatus){
                    btnCls += isCorrect?" border-3 font-bold bg-green-100 text-green-700 border-green-900 ":" font-bold bg-red-100 text-red-700 border-3 border-red-900 "
                 }else if(isSelected && !submitStatus){
                  btnCls+="border-3 font-bold border-yellow-600 bg-yellow-100 text-black "
                 }else if(isCorrect && submitStatus){
                    btnCls+="border-3 font-bold bg-green-100 text-green-700 border-green-900 "
                 }              
                //option buttons
              return <button 
              disabled = {Lock}
               onClick={()=>{
               HandleOptionClick(index) }}
                key={index} 
                className={btnCls += Lock ? "cursor-not-allowed":"cursor-pointer "} //if lock->true , no more chance to choose opitons , final submit already happend
                >
                    {option}
                </button>})}
        </div>

        <div className="flex mx-auto">
            {/*Button div */}
            <button className="border w-[130px] h-[40px] m-1 cursor-pointer rounded-sm " onClick={toggleSubmit}>Submit</button>
            <button disabled={!Lock} className={`border w-[130px] h-[40px] rounded-sm m-1 ${submitStatus ? "cursor-pointer":"cursor-not-allowed"}`}  onClick={handleNext} >Next</button>
        </div>
     </div>
</div>
    
  )
}

export default QuestionCard