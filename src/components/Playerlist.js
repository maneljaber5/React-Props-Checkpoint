import React from 'react'
import Player from './Player'
import './Play.css';
function Playerlist({players}) {
  return (
    <div className='play'>
        {
            players.map((el)=> <Player el={el}/>) 
        }
    </div>
  )
}

export default Playerlist