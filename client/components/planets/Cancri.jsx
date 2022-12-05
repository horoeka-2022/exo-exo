import React, { useRef } from 'react'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import CancriMap from '../../../server/public/textures/2k_sun.jpeg'
import { useFrame, useLoader } from '@react-three/fiber'
import { Sparkles } from '@react-three/drei'

export default function Cancri({ position, args }) {
  const textureMap = useLoader(TextureLoader, CancriMap)
  const cancriRef = useRef()

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()
    cancriRef.current.rotation.y = elapsedTime / 6
  })
  return (
    <mesh ref={cancriRef} position={position}>
      <sphereGeometry args={args} />
      <meshStandardMaterial map={textureMap} scale={5} />
      <Sparkles
        count={50}
        scale={5}
        size={2}
        speed={0}
        noise={[0.1, 0.1, 0.1]}
      />
    </mesh>
  )
}
