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

function App() {
  return (
    <Canvas>
      <Suspense>
        <OrbitControls enablePan={false} />
        <Stars count={20000} fade={true} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <Physics>
          <Earth position={[0, 0, 0]} />
          <HD80606b position={[0, 5, 0]} />
          <HD189733b position={[0, -5, 0]} />
          <Kepler22B position={[0, 10, 0]} />
          <Upsilon position={[0, -10, 0]} />
          <Cancri position={[0, 15, 0]} />
        </Physics>
      </Suspense>
    </Canvas>
  )
}

export default App
