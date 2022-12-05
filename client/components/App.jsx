import React, { Suspense, useRef } from 'react'
import { Routes, Route } from 'react-router-dom'
import Music from './Sound'

import { Canvas } from '@react-three/fiber'
import {
  Bounds,
  ContactShadows,
  Loader,
  OrbitControls,
  Stars,
  useBounds
} from '@react-three/drei'
import Hud from './HUD/Hud'
import { Physics } from '@react-three/cannon'
import Earth from './planets/Earth'
import HD80606b from './planets/HD80606b'
import HD189733b from './planets/HD189733b'
import Kepler22B from './planets/Kepler22b'
import Upsilon from './planets/Upsilon'
import Cancri from './planets/Cancri'

import Orbit from './Orbit'

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
                {/* 
                <Planet1
                  position={[10, 0, -300]}
                  args={[28, 32, 32]}
                  rotation={[0, 5, 5]}
                /> */}
                {/* <Planet2 position={[7, -60, 150]} args={[1.2, 32, 32]} />
                <Planet3 position={[-37, -85, 108]} args={[1.7, 32, 32]} />
                <Planet4 position={[7, -125, 328]} args={[6, 32, 32]} />
                <Planet5 position={[-55, -17, -6]} args={[3.1, 32, 32]} />
                <Planet6 position={[-13, 59, -230]} args={[2.0, 32, 32]} />
                <Planet7 position={[20, 2, -120]} args={[1.7, 32, 32]} />
                <Planet8 position={[118, 92, -129]} args={[1.9, 32, 32]} />
                <Planet9 position={[-20, 104, 98]} args={[1.4, 32, 32]} />
                <Planet10 position={[1, -50, -26]} args={[2.1, 32, 32]} />
                <Planet11 position={[-28, -15, 28]} args={[3.7, 32, 32]} />
                <Planet12 position={[-20, 10, 90]} args={[1.8, 32, 32]} /> */}
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
