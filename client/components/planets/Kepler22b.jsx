import React, { useRef, useState } from 'react'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import Kepler22bMap from '../../../server/public/textures/Kepler-22_b.jpeg'
import cloud from '../../../server/public/textures/clouds-texture-png.png'
import { useFrame, useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import { Html } from '@react-three/drei'
import Typing from '../Typing'

export default function Earth({ position, args }) {
  const [colorMap, cloudsMap] = useLoader(TextureLoader, [Kepler22bMap, cloud])
  const KeplerRef = useRef()
  const cloudRef = useRef()

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()
    KeplerRef.current.rotation.y = elapsedTime / 4
    cloudRef.current.rotation.y = elapsedTime / 6
  })

  const [active, setActive] = useState(false)

  function displayCard() {
    if (active === true)
      return (
        <Html distanceFactor={5} position={[0, 4, 0]}>
          <div className="card kepler">
            <div className="flexText">
              <h2 className="kepler-title">
                <Typing line={'Name: Kepler 22b'} typeSpeed={50} />
              </h2>
              <p className="kepler-description">
                <Typing
                  line={
                    'Description: Orbiting within the habitable zone of the Sunlike star Kepler-22.'
                  }
                  typeSpeed={60}
                />
              </p>
            </div>
          </div>
        </Html>
      )
  }
  return (
    <>
      <ambientLight intensity={0.4} />
      {/* <pointLight color="#f6f3ea" position={[2, 0, 5]} intensity={1.2} /> */}
      <mesh ref={KeplerRef} position={position}>
        <sphereGeometry args={args} />
        <meshStandardMaterial map={colorMap} metalness={0.4} roughness={0.7} />
      </mesh>

      <mesh
        ref={cloudRef}
        position={position}
        onPointerOver={() => setActive(true)}
        onPointerOut={() => setActive(false)}
      >
        {displayCard()}

        <sphereGeometry args={[2.412, 32, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={1.1}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
    </>
  )
}
