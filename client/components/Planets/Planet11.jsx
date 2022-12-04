import React, { useRef } from 'react'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import Planet11Map from '../../../server/public/Planet11.jpeg'
import { useFrame, useLoader } from '@react-three/fiber'

export default function Planet({ position, args }) {
  const colorMap = useLoader(TextureLoader, Planet11Map)
  const planet11Ref = useRef()

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()
    planet11Ref.current.rotation.y = elapsedTime / 1.4
  })
  return (
    <mesh ref={planet11Ref} position={position}>
      <sphereGeometry args={args} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  )
}
