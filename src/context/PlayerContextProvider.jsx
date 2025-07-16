import { useState } from "react"
import PlayerContext from "./PlayerContext"

const PlayerContextProvider = ({children}) =>{
    const [player,setPlayer] = useState(null)
    const [score,setScore] = useState(0)

    return(
        <PlayerContext.Provider value={{player,setPlayer,score,setScore}}>
         {children}
        </PlayerContext.Provider>
    )

}

export default PlayerContextProvider