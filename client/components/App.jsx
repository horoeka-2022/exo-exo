import React, { Suspense, useRef } from 'react'
import { Routes, Route } from 'react-router-dom'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars, Text } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import Earth from './Earth'
import HD80606b from './HD80606b'
import HD189733b from './HD189733b'
import Kepler22B from './Kepler22b'
import Upsilon from './Upsilon'
import Cancri from './Cancri'
import Typing from './Typing'

function App() {
  return (
    <>
      <Typing />
      {/* <Canvas>
        <Suspense>
          <OrbitControls enablePan={false} />
          <Stars count={20000} fade={true} />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 15, 10]} angle={0.3} />
          <Physics>
            <Cancri position={[0, 25, 0]} args={[1.875, 32, 32]} />
            <Earth position={[0, 0, 0]} />
            <HD80606b position={[0, 5, 0]} args={[0.3, 32, 32]} />
            <HD189733b position={[0, -15, 0]} args={[7, 32, 32]} />
            <Kepler22B position={[0, 13, 0]} args={[2.4, 32, 32]} />
            <Upsilon position={[0, -45, 0]} args={[15, 32, 32]} />
          </Physics>
        </Suspense>
      </Canvas> */}
    </>
  )
}

export default App
