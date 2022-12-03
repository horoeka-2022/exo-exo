import React, { Suspense, useRef } from 'react'
import { Routes, Route } from 'react-router-dom'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import Earth from './Earth'
import HD80606b from './HD80606b'
import HD189733b from './HD189733b'
import Kepler22B from './Kepler22b'
import Upsilon from './Upsilon'
import Cancri from './Cancri'

import Planet1 from './Planet1'
import Planet2 from './Planet2'
import Planet3 from './Planet3'
import Planet4 from './Planet4'
import Planet5 from './Planet5'
import Planet6 from './Planet6'
import Planet7 from './Planet7'
import Planet8 from './Planet8'
import Planet9 from './Planet9'
import Planet10 from './Planet10'
import Planet11 from './Planet11'
import Planet12 from './Planet12'

function App() {
  return (
    <Canvas>
      <Suspense>
        <OrbitControls enablePan={true} />
        <Stars count={200000} fade={true} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <Physics>
          <Cancri position={[-53, 25, 0]} args={[1.875, 32, 32]} />
          <Earth position={[0, 0, 0]} />
          <HD80606b position={[0, 5, 90]} args={[0.3, 32, 32]} />
          <HD189733b position={[-60, -15, 80]} args={[7, 32, 32]} />
          <Kepler22B position={[57, 13, 23]} args={[2.4, 32, 32]} />
          <Upsilon position={[7, -45, 2]} args={[5, 32, 32]} />
          <Planet1 position={[64, -15, -36]} args={[1.2, 32, 32]} />
          <Planet2 position={[47, -30, 38]} args={[3.5, 32, 32]} />
          <Planet3 position={[-37, -15, 18]} args={[1.7, 32, 32]} />
          <Planet4 position={[7, -15, 28]} args={[1.8, 32, 32]} />
          <Planet5 position={[-55, -17, -6]} args={[2.1, 32, 32]} />
          <Planet6 position={[-13, 9, -13]} args={[2.7, 32, 32]} />
          <Planet7 position={[20, 2, -20]} args={[1.7, 32, 32]} />
          <Planet8 position={[18, 12, -29]} args={[1.9, 32, 32]} />
          <Planet9 position={[-20, 4, 8]} args={[3.4, 32, 32]} />
          <Planet10 position={[1, -5, -26]} args={[2.8, 32, 32]} />
          <Planet11 position={[7, -15, 28]} args={[3.7, 32, 32]} />
          <Planet12 position={[-20, 10, 10]} args={[1.8, 32, 32]} />
        </Physics>
      </Suspense>
    </Canvas>
  )
}

export default App
