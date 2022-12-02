import React, { useRef } from 'react'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import Kepler22bMap from '../../server/public/Kepler-22_b.jpeg'
import cloud from '../../server/public/clouds-texture-png.png'
import { useFrame, useLoader } from '@react-three/fiber'
import * as THREE from 'three'

export default function Earth() {
  // const colorMap = useLoader(TextureLoader, Kepler22bMap)
  const [colorMap, cloudsMap] = useLoader(TextureLoader, [Kepler22bMap, cloud])
  const KeplerRef = useRef()
  const cloudRef = useRef()

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()
    KeplerRef.current.rotation.y = elapsedTime / 4
    cloudRef.current.rotation.y = elapsedTime / 6
  })
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight color="#f6f3ea" position={[2, 0, 5]} intensity={1.2} />
      <mesh ref={KeplerRef} position={(1, 2, 2)}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial map={colorMap} metalness={0.4} roughness={0.7} />
      </mesh>

      <mesh ref={cloudRef} position={(1, 2, 2)}>
        <sphereGeometry args={[1.005, 32, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={1.1}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
    </>
  )
}
