import React, { useRef, useState } from 'react'
import { Html } from '@react-three/drei'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import Planet1Map from '../../../server/public/textures/Planet1.jpeg'
import { useFrame, useLoader } from '@react-three/fiber'
import '../../../server/public/main.css'
import Typing from '../Typing'
// import Info from '../Info'

export default function Planet({ position, args }) {
  const colorMap = useLoader(TextureLoader, Planet1Map)
  const planet1Ref = useRef()

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()
    planet1Ref.current.rotation.y = elapsedTime / 1.4
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
                  typeSpeed={70}
                />
              </p>
              <p className="kepler-description">
                <Typing
                  line={'Distance from Earth: 635 Light-years.'}
                  typeSpeed={150}
                />
              </p>
              <p className="kepler-description">
                <Typing line={'Temperature: 15.5 °C'} typeSpeed={280} />
              </p>
            </div>
          </div>
        </Html>
      )
  }
  return (
    <mesh
      ref={planet1Ref}
      position={position}
      onPointerOver={() => setActive(true)}
      onPointerOut={() => setActive(false)}
    >
      {displayCard()}
      <sphereGeometry args={args} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  )
}
