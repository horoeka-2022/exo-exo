import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

function Typing({ line, typeSpeed }) {
  return (
    <div className="planet-info">
      <Typewriter words={[line]} typeSpeed={typeSpeed} className="info-line" />
    </div>
  )
}

export default Typing
