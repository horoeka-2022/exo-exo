import React, { Suspense, useRef } from 'react'
import { Routes, Route } from 'react-router-dom'

import { Canvas } from '@react-three/fiber'
import { Bounds, OrbitControls, Stars, useBounds } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import Earth from './Earth'
import HD80606b from './HD80606b'
import HD189733b from './HD189733b'
import Kepler22B from './Kepler22b'
import Upsilon from './Upsilon'
import Cancri from './Cancri'

function App() {
  return (
    <Canvas camera={{ position: [0, -10, 80], fov: 50 }} dpr={[1, 2]}>
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <OrbitControls
        enablePan={false}
        makeDefault
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 1.75}
      />
      <Stars count={20000} fade={true} />
      <ambientLight intensity={0.5} />
      <Suspense fallback={null}>
        <Bounds fit clip observe margin={1.2}>
          <SelectToZoom>
            <Physics>
              <Cancri
                position={[-20, -11, -20]}
                args={[1.875, 32, 32]}
                rotation={[4, 0, -0]}
              />
              <Earth position={[0, 0, 0]} rotation={[1, 1, -2]} />
              <HD80606b
                position={[0, 5, 0]}
                args={[0.3, 32, 32]}
                rotation={[1, 0, -1]}
              />
              <HD189733b
                position={[0, -15, 0]}
                args={[7, 32, 32]}
                rotation={[2, 0, 1]}
              />
              <Kepler22B
                position={[0, 13, 0]}
                args={[2.4, 32, 32]}
                rotation={[1, 1, 0]}
              />
              <Upsilon
                position={[0, -45, 0]}
                args={[15, 32, 32]}
                rotation={[1, 0, 0]}
              />
            </Physics>
          </SelectToZoom>
        </Bounds>
      </Suspense>
    </Canvas>
  )
}

function SelectToZoom({ children }) {
  const api = useBounds()
  return (
    <group
      onClick={(e) => (
        e.stopPropagation(), e.delta <= 2 && api.refresh(e.object).fit()
      )}
      onPointerMissed={(e) => e.button === 0 && api.refresh().fit()}
    >
      {children}
    </group>
  )
}

export default App
