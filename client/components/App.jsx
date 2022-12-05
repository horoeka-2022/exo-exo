import React, { Suspense } from 'react'
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

import { Physics } from '@react-three/cannon'
import Planets from './Planets'

function App() {
  return (
    <>
      <Music />
      <Canvas camera={{ position: [0, -10, 80], fov: 50 }} dpr={[1, 2]}>
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <OrbitControls
          enablePan={false}
          makeDefault
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 1.75}
          minDistance={5}
        />
        <Stars count={20000} fade={true} />
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
          <Bounds fit clip observe margin={1.2}>
            <SelectToZoom>
              <Physics>
                <Planets />
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
