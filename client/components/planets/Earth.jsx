import React, { useRef, useState } from 'react'
import { Html } from '@react-three/drei'
// import Info from '../Info'

import { TextureLoader } from 'three/src/loaders/TextureLoader'
import EarthMap from '../../../server/public/textures/EarthHD.webp'
import { useFrame, useLoader } from '@react-three/fiber'
import Typing from '../Typing'

export default function Earth({ position, args }) {
  const colorMap = useLoader(TextureLoader, EarthMap)
  const earthRef = useRef()

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()
    earthRef.current.rotation.y = elapsedTime / 6
  })

  const [active, setActive] = useState(false)

  function displayCard() {
    if (active === true)
      return (
        <Html distanceFactor={5}>
          <div className="card earth">
            <div className="flexText">
              <h2 className="earth-title">Name: Earth</h2>
              <p className="earth-description">
                {/* <Typing
                  line={ */}
                'Description: Home planet. Contains liquid water. Diverse life
                forms.'
                {/* } */}
                />
              </p>
            </div>
          </div>
        </Html>
      )
  }
  return (
    <mesh
      ref={earthRef}
      position={position}
      onPointerOver={() => setActive(true)}
      onPointerOut={() => setActive(false)}
    >
      {displayCard()}
      <sphereGeometry args={args} />
      <meshStandardMaterial map={colorMap} />
      {/* <Html distanceFactor={10}> */}
      {/* <div className="content">
          <Info />
        </div> */}
      {/* </Html> */}
    </mesh>
  )
}
