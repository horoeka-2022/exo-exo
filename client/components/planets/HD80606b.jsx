import React, { useRef, useState } from 'react'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls, Html } from '@react-three/drei'
import * as THREE from 'three'
import Typing from '../Typing'

import HD80606bMap from '../../../server/public/textures/HD80606b.jpg'
import HD80606bClouds from '../../../server/public/textures/cloudsred.png'

export default function HD80606b({ position, args }) {
  const [colorMap, cloudMap] = useLoader(TextureLoader, [
    HD80606bMap,
    HD80606bClouds,
  ])

  const HD80606bRef = useRef()
  const AtmosphereRef = useRef()

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()
    HD80606bRef.current.rotation.y = elapsedTime / 6
    AtmosphereRef.current.rotation.y = elapsedTime / 2
  })

  const [active, setActive] = useState(false)

  function displayCard() {
    if (active === true)
      return (
        <Html distanceFactor={5} position={[0, 0.8, 0]}>
          <div className="card HD606b">
            <div className="flexText">
              <h2 className="HD606b-title">
                <Typing line={'Name: HD80606b'} typeSpeed={50} />
              </h2>
              <p className="HD606b-description">
                <Typing line={'Description: lil Gas Giant'} typeSpeed={60} />
              </p>
            </div>
          </div>
        </Html>
      )
  }

  return (
    <>
      <mesh ref={HD80606bRef} position={position}>
        <sphereGeometry args={args} />
        <meshStandardMaterial map={colorMap} />
      </mesh>
      <mesh
        ref={AtmosphereRef}
        position={position}
        onPointerOver={() => setActive(true)}
        onPointerOut={() => setActive(false)}
      >
        {displayCard()}
        <ambientLight intensity={0.2} />
        {/* <spotLight position={[5, 10, 5]} angle={0.6} intensity={1} /> */}
        <sphereGeometry args={[0.3015, 32, 32]} />
        <meshStandardMaterial
          map={cloudMap}
          opacity={0.4}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
    </>
  )
}
