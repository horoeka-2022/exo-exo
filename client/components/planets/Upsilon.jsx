import React, { useRef, useState } from 'react'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import UpsilonMap from '../../../server/public/textures/Upsilon.jpeg'
import { useFrame, useLoader } from '@react-three/fiber'
import { Html } from '@react-three/drei'

export default function Upsilon({ position, args }) {
  const colorMap = useLoader(TextureLoader, UpsilonMap)
  const upsilonRef = useRef()

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()
    upsilonRef.current.rotation.y = elapsedTime / 1.4
  })

  const [active, setActive] = useState(false)

  function displayCard() {
    if (active === true)
      return (
        <Html distanceFactor={5} position={[0, 2, 0]}>
          <div className="card upsilon">
            <div className="flexText">
              <h2 className="upsilon-title">Upsilon Andromedae b</h2>
              <p className="upsilon-description">
                A giant planet composed mainly of gas, it has no solid surface.
              </p>
            </div>
          </div>
        </Html>
      )
  }

  return (
    <mesh
      ref={upsilonRef}
      position={position}
      onClick={() => setActive(!active)}
    >
      {displayCard()}
      <sphereGeometry args={args} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  )
}
