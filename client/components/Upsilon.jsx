import React, { useRef } from 'react'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import UpsilonMap from '../../server/public/Upsilon.jpeg'
import { useFrame, useLoader } from '@react-three/fiber'

export default function Upsilon({ position }) {
  const colorMap = useLoader(TextureLoader, UpsilonMap)
  const upsilonRef = useRef()

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()
    upsilonRef.current.rotation.y = elapsedTime / 1.4
  })
  return (
    <mesh ref={upsilonRef} position={position}>
      <sphereGeometry args={[2, 16, 16]} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  )
}
