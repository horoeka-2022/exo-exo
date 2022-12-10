import React, { useRef, useState } from 'react'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import UpsilonMap from '../../../server/public/textures/Upsilon.jpeg'
import cloudsMap from '../../../server/public/textures/cloudsred.png'

import { useFrame, useLoader } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import * as THREE from 'three'
import Typing from '../Typing'

export default function Upsilon({ position, args }) {
  const [colorMap, cloudMap] = useLoader(TextureLoader, [UpsilonMap, cloudsMap])

  const upsilonRef = useRef()
  const cloudsRef = useRef()

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()
    upsilonRef.current.rotation.y = elapsedTime / 1.4
    cloudsRef.current.rotation.y = elapsedTime / 8
  })

  const [active, setActive] = useState(false)

  function displayCard() {
    if (active === true)
      return (
        <Html distanceFactor={5} position={[0, 22, 0]}>
          <div className="card upsilon">
            <div className="flexText">
              <h2 className="upsilon-title">
                <Typing line={'Name: Upsilon Andromedae b'} typeSpeed={70} />
              </h2>
              <p className="upsilon-description">
                <Typing
                  line={
                    'Description: A giant planet composed mainly of gas, it has no solid surface.'
                  }
                  typeSpeed={70}
                />
                <p className="upsilon-description">
                  <Typing
                    line={'Distance from Earth: 44 light years.'}
                    typeSpeed={150}
                  />
                </p>
                <p className="upsilon-description">
                  <Typing line={'Temperature: 5939.85 °C'} typeSpeed={220} />
                </p>
              </p>
            </div>
          </div>
        </Html>
      )
  }

  return (
    <>
      <mesh ref={upsilonRef} position={position}>
        <sphereGeometry args={args} />
        <meshStandardMaterial map={colorMap} />
      </mesh>
      <mesh
        ref={cloudsRef}
        position={position}
        onPointerOver={() => setActive(true)}
        onPointerOut={() => setActive(false)}
      >
        {displayCard()}

        <sphereGeometry args={[5.1, 32, 32]} />
        <meshPhongMaterial
          map={cloudMap}
          opacity={0.5}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
    </>
  )
}
