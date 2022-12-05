import React from 'react'

import Earth from './planets/Earth'
import HD80606b from './planets/HD80606b'
import HD189733b from './planets/HD189733b'
import Kepler22B from './planets/Kepler22b'
import Upsilon from './planets/Upsilon'
import Cancri from './planets/Cancri'
import Planet1 from './planets/Planet1'
import Planet2 from './planets/Planet2'
import Planet3 from './planets/Planet3'
import Planet4 from './planets/Planet4'
import Planet5 from './planets/Planet5'
import Planet6 from './planets/Planet6'
import Planet7 from './planets/Planet7'
import Planet8 from './planets/Planet8'
import Planet9 from './planets/Planet9'
import Planet10 from './planets/Planet10'
import Planet11 from './planets/Planet11'
import Planet12 from './planets/Planet12'

function Planets() {
  return (
    <>
      <Cancri
        position={[1, 20, -10]}
        args={[1.875, 32, 32]}
        rotation={[4, 0, -0]}
      />
      <Earth position={[0, 0, 0]} rotation={[1, 1, -2]} />
      <HD80606b
        position={[20, 1, -10]}
        args={[0.3, 32, 32]}
        rotation={[1, 0, -1]}
      />
      <HD189733b
        position={[-20, 5, -1]}
        args={[7, 32, 32]}
        rotation={[2, 0, 1]}
      />
      <Kepler22B
        position={[18, 15, -25]}
        args={[2.4, 32, 32]}
        rotation={[1, 1, 0]}
      />
      <Upsilon
        position={[0, -40, -50]}
        args={[15, 32, 32]}
        rotation={[1, 0, 0]}
      />
      <Planet1 position={[64, -15, -236]} args={[28, 32, 32]} />
      <Planet2 position={[7, -60, 150]} args={[1.2, 32, 32]} />
      <Planet3 position={[-37, -85, 108]} args={[1.7, 32, 32]} />
      <Planet4 position={[7, -125, 328]} args={[6, 32, 32]} />
      <Planet5 position={[-55, -17, -6]} args={[3.1, 32, 32]} />
      <Planet6 position={[-13, 59, -230]} args={[2.0, 32, 32]} />
      <Planet7 position={[20, 2, -120]} args={[1.7, 32, 32]} />
      <Planet8 position={[118, 92, -129]} args={[1.9, 32, 32]} />
      <Planet9 position={[-20, 104, 98]} args={[1.4, 32, 32]} />
      <Planet10 position={[1, -50, -26]} args={[2.1, 32, 32]} />
      <Planet11 position={[-28, -15, 28]} args={[3.7, 32, 32]} />
      <Planet12 position={[-20, 10, 90]} args={[1.8, 32, 32]} />
    </>
  )
}

export default Planets
