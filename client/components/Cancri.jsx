import React, { useRef } from 'react'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import CancriMap from '../../server/public/2k_sun.jpeg'
import { useFrame, useLoader } from '@react-three/fiber'
import { Sparkles, MeshRefractionMaterial } from '@react-three/drei'

export default function Cancri() {
  const textureMap = useLoader(TextureLoader, CancriMap)
  const cancriRef = useRef()

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()
    cancriRef.current.rotation.y = elapsedTime / 6
  })
  return (
    <mesh ref={cancriRef}>
      <sphereGeometry />
      <meshStandardMaterial map={textureMap} scale={5} />
      <Sparkles
        count={50}
        scale={1 * 2}
        size={2}
        speed={0}
        noise={[0.1, 0.1, 0.1]}
      />
    </mesh>
  )
}
