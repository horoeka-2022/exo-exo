import React, { useRef } from 'react'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import Planet9Map from '../../../server/public/Planet9.jpeg'
import { useFrame, useLoader } from '@react-three/fiber'

export default function Planet({ position, args }) {
  const colorMap = useLoader(TextureLoader, Planet9Map)
  const planet9Ref = useRef()

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()
    planet9Ref.current.rotation.y = elapsedTime / 1.4
  })
  return (
    <mesh ref={planet9Ref} position={position}>
      <sphereGeometry args={args} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  )
}
