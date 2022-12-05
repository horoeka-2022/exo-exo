// DAPH'S TEST FOR ENVIRONMNET and 3D MAPPING!!!!

import React, { Suspense } from 'react'

import { extend, Canvas } from '@react-three/fiber'
import {
  Environment,
  Stage,
  OrbitControls,
  PerspectiveCamera,
  MeshReflectorMaterial,
} from '@react-three/drei'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import myFont from '../../server/public/fonts/space-quest.json'
import { DoubleSide } from 'three'

extend({ TextGeometry })

function App() {
  const font = new FontLoader().parse(myFont)

  return (
    <Canvas shadows camera={{ position: [-50, 0, 0] }}>
      <Suspense fallback={null}>
        <Stage
          environment={null}
          intensity={1}
          // contactShadowOpacity={0.1}
          // shadowBias={-0.0015}
        >
          <Environment
            background={true}
            files={'../../server/public/hdr/clouds.hdr'}
          />
          {/* title */}
          <mesh position={[-2.5, 10, 6]}>
            <ambientLight intensity={2} />
            <spotLight position={[0, 0, 5]} angle={3} intensity={2} />
            <textGeometry args={['exo exo', { font, size: 1, height: 0.2 }]} />
            <MeshReflectorMaterial
              blur={[400, 500]}
              resolution={1024}
              mixBlur={0.5}
              mixStrength={8}
              depthScale={1}
              minDepthThreshold={0.85}
              color="#151515"
              metalness={1}
              roughness={0.4}
              side={DoubleSide}
            />
          </mesh>
        </Stage>
      </Suspense>
      <OrbitControls
        autoRotate={false}
        enableZoom={true}
        enablePan={false}
        maxPolarAngle={Math.PI / 0}
        minPolarAngle={Math.PI / 2.3}
      />
      <PerspectiveCamera makeDefault position={[-30, 120, 200]} fov={40} />
    </Canvas>
  )
}

export default App
