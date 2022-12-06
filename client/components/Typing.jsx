import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

function Typing({ line }) {
  return (
    <div className="planet-info">
      <Typewriter words={[line]} typeSpeed={50} className="info-line" />
    </div>
  )
}

export default Typing
