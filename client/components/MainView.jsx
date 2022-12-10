import React, { Suspense } from 'react'
import Orbit from './Orbit'
import KeyControls from './KeyControls'
import { Canvas } from '@react-three/fiber'
import {
  Bounds,
  ContactShadows,
  Html,
  OrbitControls,
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
import Planet1 from '../components/planets/Planet1'
import Planet2 from '../components/planets/Planet2'
import Planet3 from '../components/planets/Planet3'
import Planet4 from '../components/planets/Planet4'
import Planet5 from '../components/planets/Planet5'
import Planet6 from '../components/planets/Planet6'
import Planet7 from '../components/planets/Planet7'
import Music from './Sound'
import Typing from './Typing'

function MainView() {
  return (
    <>
      <Hud />
      <Music />

      <Canvas camera={{ position: [0, -10, 80], fov: 5 }} dpr={[1, 2]}>
        <KeyControls />

        <spotLight position={[10, 10, 10]} angle={0.3} />
        <OrbitControls
          enablePan={false}
          makeDefault
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 3.14}
          minDistance={3}
          autoRotate={true}
          autoRotateSpeed={0.1}
        />

        <Stars
          count={1000}
          fade={false}
          depth={10}
          speed={3.3}
          factor={0.1}
          radius={30}
        />
        <ambientLight intensity={1} />
        <Suspense fallback={<Loader />}>
          <Orbit />
          <Bounds fit clip observe margin={0.7}>
            <SelectToZoom>
              <Physics>
                <Cancri
                  position={[32, 112, -40]}
                  args={[1.875, 32, 32]}
                  rotation={[4, 0, -0]}
                />
                <Earth
                  position={[0, 0, 0]}
                  rotation={[1, 1, -2]}
                  occlude={[false]}
                />
                <HD80606b
                  position={[120, -145, 110]}
                  args={[1.45, 32, 32]}
                  rotation={[1, 0, -1]}
                  occlude={[false]}
                />
                <HD189733b
                  position={[-50, 68, -31]}
                  args={[1.85, 32, 32]}
                  rotation={[2, 0, 1]}
                  occlude={[false]}
                />
                <Kepler22B
                  position={[-118, -205, -195]}
                  args={[1.4, 32, 32]}
                  rotation={[1, 1, 0]}
                />
                {/* <Planet1
                  position={[330, -214, -90]}
                  args={[4.2, 32, 32]}
                  rotation={[0, 5, 5]}
                />
                <Planet2 position={[34, -210, 150]} args={[4.2, 32, 32]} />
                <Planet3 position={[-37, 155, 108]} args={[2.7, 32, 32]} />
                <Planet4 position={[174, -125, 268]} args={[2.4, 32, 32]} />
                <Planet5 position={[-55, -117, -6]} args={[3.1, 32, 32]} />
                <Planet6 position={[-13, 39, -230]} args={[1.3, 32, 32]} />
                <Planet7 position={[70, -290, -120]} args={[1.7, 32, 32]} /> */}
              </Physics>
            </SelectToZoom>
            <Upsilon
              position={[210, -60, -50]}
              args={[5, 32, 32]}
              rotation={[1, 0, 0]}
            />
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

function Loader() {
  return (
    <Html center>
      <p className="home-type">loading...</p>
    </Html>
  )
}

export default MainView
