import React, { useRef, useState } from 'react'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import HD33bMap from '../../../server/public/textures/HD189733b.webp'
import HD33bAtmos from '../../../server/public/textures/8k_earth_clouds.png'
import { useFrame, useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import { Html } from '@react-three/drei'

export default function HD33b({ position, args }) {
  const [colorMap, cloudsMap] = useLoader(TextureLoader, [HD33bMap, HD33bAtmos])
  const earthRef = useRef()
  const cloudsRef = useRef()

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()
    earthRef.current.rotation.y = elapsedTime / 6
    cloudsRef.current.rotation.y = elapsedTime / 0.1
  })

  const [active, setActive] = useState(false)

  function displayCard() {
    if (active === true)
      return (
        <Html distanceFactor={5} position={[0, 10, 0]}>
          <div className="card HD33b">
            <div className="flexText">
              <h2 className="HD33b-title">Name: HD 189733 b</h2>
              <p className="HD33b-description">Description: Gas Giant</p>
            </div>
          </div>
        </Html>
      )
  }

  return (
    <>
      <mesh
        ref={cloudsRef}
        position={position}
        onPointerOver={() => setActive(true)}
        onPointerOut={() => setActive(false)}
      >
        {displayCard()}
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
