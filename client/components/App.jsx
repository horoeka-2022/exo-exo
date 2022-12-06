import React, { Suspense, useRef } from 'react'
import Music from './Sound'

import { Canvas } from '@react-three/fiber'
import {
  Bounds,
  ContactShadows,
  Loader,
  OrbitControls,
  Stars,
  useBounds,
} from '@react-three/drei'
import Hud from './HUD/Hud'
import Earth from './planets/Earth'
import HD80606b from './planets/HD80606b'
import HD189733b from './planets/HD189733b'
import Kepler22B from './planets/Kepler22b'
import Upsilon from './planets/Upsilon'
import Cancri from './planets/Cancri'

function App() {
  return (
    <>
      <Music autoLoad={true} />
      <Hud />
      <Canvas camera={{ position: [0, -10, 80], fov: 50 }} dpr={[1, 2]}>
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <OrbitControls
          enablePan={false}
          makeDefault
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 1.75}
          minDistance={2}
          autoRotate={true}
          autoRotateSpeed={0.2}
        />
        <Stars count={20000} fade={true} />
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
          {/* <Orbit position={[0, 0, -500]} /> */}
          <Bounds fit clip observe margin={1.2}>
            <SelectToZoom>
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
