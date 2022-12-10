import React, { useRef, useState } from 'react'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import HD33bMap from '../../../server/public/textures/HD189733b.webp'
import HD33bAtmos from '../../../server/public/textures/8k_earth_clouds.png'
import { useFrame, useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import { Html, Cloud } from '@react-three/drei'
import Typing from '../Typing'

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
              <h2 className="HD33b-title">
                <Typing line={'Name: HD 189733 b'} typeSpeed={50} />
              </h2>

              <p className="HD33b-description">
                <Typing
                  line={
                    'Description: The cobalt blue colour comes from a hazy, blow-torched atmosphere containing clouds laced with glass. Winds send the glass storming sideways at 8690 kmh.'
                  }
                  typeSpeed={40}
                />
                <p className="HD33b-description">
                  <Typing
                    line={'Distance from Earth: 64 light-years.'}
                    typeSpeed={150}
                  />
                </p>
                <p className="HD33b-description">
                  <Typing line={'Temperature: 935.85 °C'} typeSpeed={220} />
                </p>
              </p>
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
        <sphereGeometry args={[1.9, 32, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.3}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={earthRef} position={position}>
        <Cloud
          opacity={0.007}
          speed={0.1} // Rotation speed
          width={0.5} // Width of the full cloud
          depth={1} // Z-dir depth
          segments={50} // Number of particles
        />
        <sphereGeometry args={args} />
        <meshStandardMaterial map={colorMap} />
      </mesh>
    </>
  )
}
