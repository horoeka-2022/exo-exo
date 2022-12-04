import React, { useRef } from 'react'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import Planet8Map from '../../../server/public/textures/Planet8.png'
import { useFrame, useLoader } from '@react-three/fiber'

export default function Planet({ position, args }) {
  const colorMap = useLoader(TextureLoader, Planet8Map)
  const planet8Ref = useRef()

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()
    planet8Ref.current.rotation.y = elapsedTime / 1.4
  })
  return (
    <mesh ref={planet8Ref} position={position}>
      <sphereGeometry args={args} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  )
}
