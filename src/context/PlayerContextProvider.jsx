import { useState } from "react"
import PlayerContext from "./PlayerContext"

const PlayerContextProvider = ({children}) =>{
    const [player,setPlayer] = useState(null)

    return(
        <PlayerContext.Provider value={{player,setPlayer}}>
         {children}
        </PlayerContext.Provider>
    )

}

export default PlayerContextProvider