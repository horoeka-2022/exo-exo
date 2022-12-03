import { useLoader, extend } from '@react-three/fiber'
import { Html, useKeyboardControls } from '@react-three/drei'
import React, { useRef } from 'react'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import PlaneTexture from '../../server/public/glass1.jpg'
import * as THREE from 'three'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import myFont from '../../server/public/fonts/Trispace.json'
import PlanetText from '../../server/public/HD80606b.jpg'
import { FrontSide, DoubleSide } from 'three'

extend({ TextGeometry })

export default function Home() {
  const planeMap = useLoader(TextureLoader, PlaneTexture)
  const planeRef = useRef()
  const font = new FontLoader().parse(myFont)
  const textMap = useLoader(TextureLoader, PlanetText)

  return (
    <>
      {/* plane screen */}
      <mesh ref={planeRef} position={[0, 0, 2]}>
        <ambientLight intensity={0.2} />
        <spotLight position={[0, 0, 5]} angle={10} intensity={1} />
        <meshStandardMaterial
          map={planeMap}
          opacity={0.6}
          transparent
          side={FrontSide}
          reflectivity={10}
        />
        <planeGeometry args={[12, 6]} />
        {/* Html incorporation */}
        <Html>
          <div>
            <center>{/* <h1>Hello World!</h1> */}</center>
          </div>
        </Html>
      </mesh>

      {/* title */}
      <mesh position={[-2.5, 0, 4]}>
        <ambientLight intensity={1} />
        <spotLight position={[0, 0, 5]} angle={1} intensity={1} />
        <textGeometry args={['EXO EXO', { font, size: 0.8, height: 0.5 }]} />
        <meshLambertMaterial attach="material" color={'silver'} />
        <meshStandardMaterial
          metalness={3}
          roughness={0.1}
          map={textMap}
          opacity={1}
          transparent
          reflectivity={0}
        />
      </mesh>
    </>
  )
}
