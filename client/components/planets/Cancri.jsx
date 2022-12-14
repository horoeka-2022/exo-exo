import React, { useRef, useState } from 'react'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import CancriMap from '../../../server/public/textures/2k_sun.jpeg'
import { useFrame, useLoader } from '@react-three/fiber'
import { Sparkles, MeshRefractionMaterial, Html } from '@react-three/drei'

export default function Cancri({ position, args }) {
  const textureMap = useLoader(TextureLoader, CancriMap)
  const cancriRef = useRef()

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()
    cancriRef.current.rotation.y = elapsedTime / 6
  })
  const [active, setActive] = useState(false)

  function displayCard() {
    if (active === true)
      return (
        <Html distanceFactor={5} position={[0, 3.5, 0]}>
          <div className="card cancri">
            <div className="flexText">
              <h2 className="cancri-title">Name: 55 Cancri e</h2>
              <p className="cancri-description">
                Description: A molten surface planet with sparkling silicate
                skies.
              </p>
            </div>
          </div>
        </Html>
      )
  }
  return (
    <mesh
      ref={cancriRef}
      position={position}
      onClick={() => setActive(!active)}
    >
      {displayCard()}
      <sphereGeometry args={args} />
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
