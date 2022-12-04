import React, { useRef } from 'react'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import HD33bMap from '../../../server/public/HD189733b.webp'
import HD33bAtmos from '../../../server/public/8k_earth_clouds.png'
import { useFrame, useLoader } from '@react-three/fiber'
import * as THREE from 'three'

export default function HD33b({ position, args }) {
  const [colorMap, cloudsMap] = useLoader(TextureLoader, [HD33bMap, HD33bAtmos])
  const earthRef = useRef()
  const cloudsRef = useRef()

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()
    earthRef.current.rotation.y = elapsedTime / 6
    cloudsRef.current.rotation.y = elapsedTime / 0.1
  })
  return (
    <>
      <mesh ref={cloudsRef} position={position}>
        <sphereGeometry args={[7.035, 32, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.3}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={earthRef} position={position}>
        <sphereGeometry args={args} />
        <meshStandardMaterial map={colorMap} />
      </mesh>
    </>
  )
}
