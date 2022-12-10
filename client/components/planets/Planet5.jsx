import React, { useRef, useState } from 'react'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import Planet5Map from '../../../server/public/textures/Planet5A.jpg'
import { useFrame, useLoader } from '@react-three/fiber'
import Typing from '../Typing'

export default function Planet({ position, args }) {
  const colorMap = useLoader(TextureLoader, Planet5Map)
  const planet5Ref = useRef()

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()
    planet5Ref.current.rotation.y = elapsedTime / 1.4
  })

  const [active, setActive] = useState(false)

  function displayCard() {
    if (active === true)
      return (
        <Html distanceFactor={5} position={[0, 1.8, 0]}>
          <div className="card earth">
            <div className="flexText">
              <h2 className="earth-title">
                <Typing line={'Name: Earth'} typeSpeed={50} />
              </h2>
              <p className="earth-description">
                <Typing
                  line={
                    'Description: Home planet. Contains liquid water. Diverse life forms.'
                  }
                  typeSpeed={100}
                />
                <p className="earth-description">
                  <Typing
                    line={'Distance from Earth: 0 light-years.'}
                    typeSpeed={150}
                  />
                </p>
                <p className="earth-description">
                  <Typing
                    line={'Temperature: −89.2 - 56.7 °C'}
                    typeSpeed={220}
                  />
                </p>
              </p>
            </div>
          </div>
        </Html>
      )
  }
  return (
    <mesh
      ref={planet5Ref}
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
