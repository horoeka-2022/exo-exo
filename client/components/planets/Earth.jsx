import React, { useRef } from 'react'
import { Html } from '@react-three/drei'
// import Info from '../Info'

import { TextureLoader } from 'three/src/loaders/TextureLoader'
import EarthMap from '../../../server/public/textures/EarthHD.webp'
import { useFrame, useLoader } from '@react-three/fiber'

export default function Earth({ position, args }) {
  const colorMap = useLoader(TextureLoader, EarthMap)
  const earthRef = useRef()

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()
    earthRef.current.rotation.y = elapsedTime / 6
  })
  return (
    <mesh ref={earthRef} position={position}>
      <sphereGeometry args={args} />
      <meshStandardMaterial map={colorMap} />
      <Html distanceFactor={10}>
        {/* <div className="content">
          <Info />
        </div> */}
      </Html>
    </mesh>
  )
}
