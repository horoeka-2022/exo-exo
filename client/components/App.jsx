import React, { Suspense, useRef } from 'react'
import { Routes, Route } from 'react-router-dom'

import { Canvas } from '@react-three/fiber'
import {
  Bounds,
  ContactShadows,
  Loader,
  OrbitControls,
  Stars,
  useBounds,
} from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import Earth from './Earth'
import HD80606b from './HD80606b'
import HD189733b from './HD189733b'
import Kepler22B from './Kepler22b'
import Upsilon from './Upsilon'
import Cancri from './Cancri'

function App() {
  return (
    <>
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
              </Physics>
            </SelectToZoom>
          </Bounds>
          <ContactShadows
            rotateX={Math.PI / 2}
            position={[0, -35, 0]}
            opacity={0.2}
            width={200}
            height={200}
            blur={1}
            far={50}
          />
        </Suspense>
      </Canvas>
      <Loader />
    </>
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
