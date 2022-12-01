import React, { Suspense, useRef } from 'react'
import { Routes, Route } from 'react-router-dom'

import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import EarthMap from '../../server/public/RS3_EarthC.webp'

function Sphere() {
  const colorMap = useLoader(TextureLoader, EarthMap)
  const earthRef = useRef()

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()
    earthRef.current.rotation.y = elapsedTime / 6
  })
  return (
    <mesh ref={earthRef}>
      <sphereGeometry />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  )
}

function App() {
  return (
    <Canvas>
      <Suspense>
        <OrbitControls />
        <Stars count={20000} fade={true} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <Physics>
          <Sphere />
        </Physics>
      </Suspense>
    </Canvas>
  )
}

export default App
