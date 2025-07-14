import React, { useContext } from 'react'
import PlayerContext from '../context/PlayerContext'

function Profile() {
  const {player} = useContext(PlayerContext)
  console.log(player)
  return (
    <div>
        Profile {player}
    </div>
    
  )
}

export default Profile