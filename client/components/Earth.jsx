import React, { useRef } from 'react'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import EarthMap from '../../server/public/RS3_EarthC.webp'
import { useFrame, useLoader } from '@react-three/fiber'

export default function Earth({ position }) {
  const colorMap = useLoader(TextureLoader, EarthMap)
  const earthRef = useRef()

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()
    earthRef.current.rotation.y = elapsedTime / 6
  })
  return (
    <mesh ref={earthRef} position={position}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <sphereGeometry />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  )
}
