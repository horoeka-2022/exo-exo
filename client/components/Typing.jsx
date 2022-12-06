import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

<<<<<<< HEAD
function Typing({ line }) {
  return (
    <div className="planet-info">
      <Typewriter words={[line]} typeSpeed={50} className="info-line" />
    </div>
=======
function Typing({ line, typeSpeed }) {
  return (
    
      <Typewriter words={[line]} typeSpeed={typeSpeed} className="info-line" />
    
>>>>>>> 2c46d0b3f1155a8a4eb129afc179e6fb97326221
  )
}

export default Typing
