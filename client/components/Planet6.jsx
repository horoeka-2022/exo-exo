import React, { useRef } from 'react'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import Planet6Map from '../../server/public/Planet6.webp'
import { useFrame, useLoader } from '@react-three/fiber'

export default function Planet({ position, args }) {
  const colorMap = useLoader(TextureLoader, Planet6Map)
  const planet6Ref = useRef()

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()
    planet6Ref.current.rotation.y = elapsedTime / 1.4
  })
  return (
    <mesh ref={planet6Ref} position={position}>
      <sphereGeometry args={args} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  )
}
