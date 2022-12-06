import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

function Typing({ line, typeSpeed }) {
  return (
    <Typewriter words={[line]} typeSpeed={typeSpeed} className="planet-info" />
  )
}

export default Typing
