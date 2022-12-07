import React, { Suspense, useRef } from 'react'
import { Routes, Route } from 'react-router-dom'
import Music from './Sound'
import KeyControls from './KeyControls'
import CameraControls from './CameraControls'
import { Canvas } from '@react-three/fiber'
import {
  Bounds,
  ContactShadows,
  Loader,
  OrbitControls,
  Sparkles,
  Stars,
  useBounds,
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

      <Canvas>
        {/* <Sparkles count={100} size={100} opacity={50} /> */}
        {/* <Orbit position={[-90, 30, -50]} /> */}
        {/* <Canvas camera={{ position: [20, 80, 10], fov: 30 }} dpr={[1, 2]}>  */}
        {/* <spotLight position={[10, 15, 10]} angle={0.3} /> */}

        {/* <OrbitControls
          enablePan={false}
          makeDefault
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 1.75}
          minDistance={2}
          maxDistance={200}
          autoRotate={true}
          autoRotateSpeed={0.2}
        /> */}
        <CameraControls />
        <KeyControls />
        {/* <div style={{ width: '800px', height: '1200px' }}> */}
        <Stars count={10000} fade={true} radius={500} depth={100} speed={2} />

        <ambientLight intensity={0.2} />
        <Suspense fallback={null}>
          <Bounds fit clip observe damping={6} margin={1.2}>
            <SelectToZoom>
              <Physics>
                <Cancri
                  position={[1, 220, -10]}
                  args={[1.875, 32, 32]}
                  rotation={[4, 0, -0]}
                />
                <Earth position={[0, 0, 0]} rotation={[1, 1, -2]} />
                <HD80606b
                  position={[20, -120, 110]}
                  args={[0.3, 32, 32]}
                  rotation={[1, 0, -1]}
                />
                {/* <Scene /> */}
                <HD189733b
                  position={[-20, 95, -100]}
                  args={[7, 32, 32]}
                  rotation={[2, 0, 1]}
                />
                <Kepler22B
                  position={[98, 15, -25]}
                  args={[2.4, 32, 32]}
                  rotation={[1, 1, 0]}
                />
                <Upsilon
                  position={[-100, -40, -50]}
                  args={[30, 32, 32]}
                  rotation={[1, 0, 0]}
                />

                <Planet1
                  position={[10, 0, -300]}
                  args={[40, 32, 32]}
                  rotation={[0, 5, 5]}
                />
                <Planet2 position={[7, -160, 150]} args={[1.2, 32, 32]} />
                <Planet3 position={[-37, -85, 108]} args={[1.7, 32, 32]} />
                <Planet4 position={[7, -125, 268]} args={[6, 32, 32]} />
                <Planet5 position={[-55, -17, -6]} args={[3.1, 32, 32]} />
                <Planet6 position={[-13, 59, -230]} args={[2.0, 32, 32]} />
                <Planet7 position={[20, 190, -120]} args={[1.7, 32, 32]} />
                <Planet8 position={[118, 92, -129]} args={[1.9, 32, 32]} />
                <Planet9 position={[-20, 104, 98]} args={[1.4, 32, 32]} />
                <Planet10 position={[200, -50, -26]} args={[2.1, 32, 32]} />
                <Planet11 position={[-28, -15, 28]} args={[3.7, 32, 32]} />
                <Planet12 position={[-20, 10, 90]} args={[1.8, 32, 32]} />
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
