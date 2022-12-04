import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const cancri = [
  'Name : 55 Cancri e.',
  'Description : A molten surface planet with sparkling silicate skies. Approximately 8 times heavier than Earth with twice the diameter.',
  'Distance From Earth: 40 light years.',
  'Habitability : No.',
  'Atmosphere : Carbon, Nitrogen, Oxygen.',
  'Temperature : 2700 degrees Celsius.',
  'Size : 1.875 x Earth.',
  'Year of Discovery: 2004.',
  'Orbit : 0.7 days.',
]

function Typing() {
  return cancri.map((line) => {
    return (
      <div className="planet-info">
        <Typewriter words={[line]} typeSpeed={20} className="info-line" />
      </div>
    )
  })
}

export default Typing
