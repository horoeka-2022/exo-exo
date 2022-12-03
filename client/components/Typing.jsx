import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

function Typing() {
  return (
    <div className="planet-info">
      <Typewriter
        words={['Name : 55 Cancri e']}
        cursor
        cursorStyle="_"
        cursorBlinking={false}
        typeSpeed={50}
      />
      <Typewriter
        words={[
          'Description: A molten surface planet with sparkling silicate skies. Approximately 8 times heavier than Earth with twice the diameter',
        ]}
        cursor
        cursorStyle="_"
        cursorBlinking={false}
        typeSpeed={50}
      />
      <Typewriter
        words={['Distance from Earth: 40 light years']}
        cursor
        cursorStyle="_"
        cursorBlinking={false}
        typeSpeed={50}
      />
    </div>
  )
}

export default Typing
