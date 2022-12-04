import React, { useRef } from 'react'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useFrame, useLoader } from '@react-three/fiber'
import * as THREE from 'three'

import HD80606bMap from '../../../server/public/textures/HD80606b.jpg'
import HD80606bClouds from '../../../server/public/textures/cloudsred.png'

export default function HD80606b({ position, args }) {
  const [colorMap, cloudMap] = useLoader(TextureLoader, [
    HD80606bMap,
    HD80606bClouds,
  ])
  const HD80606bRef = useRef()
  const AtmosphereRef = useRef()

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()
    HD80606bRef.current.rotation.y = elapsedTime / 6
    AtmosphereRef.current.rotation.y = elapsedTime / 2
  })

  return (
    <>
      {/* Main Layer */}
      <mesh ref={HD80606bRef} position={position}>
        {/* <ambientLight intensity={0.2} />
        <spotLight position={[5, 10, 5]} angle={0.6} intensity={0.8} /> */}
        <sphereGeometry args={args} />
        <meshStandardMaterial map={colorMap} />
      </mesh>

      {/* Atmosphere layer */}
      <mesh ref={AtmosphereRef} position={position}>
        <ambientLight intensity={0.2} />
        <spotLight position={[5, 10, 5]} angle={0.6} intensity={1} />
        <sphereGeometry args={[0.3015, 32, 32]} />
        <meshStandardMaterial
          map={cloudMap}
          opacity={0.4}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
    </>
  )
}
