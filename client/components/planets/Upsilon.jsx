import React, { useRef, useState } from 'react'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import UpsilonMap from '../../../server/public/textures/Upsilon.jpeg'
import cloudsMap from '../../../server/public/textures/cloudsred.png'

import { useFrame, useLoader } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import * as THREE from 'three'

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
        <Html
          distanceFactor={2}
          center={true}
          // position={[0, 22, 0]}
          // zIndexRange={[0, 30]}
          // fullscreen={true}
          // transform={true}
          // sprite={true}
        >
          <div className="card upsilon">
            <div className="flexText">
              <h2 className="upsilon-title">Name: Upsilon Andromedae b</h2>
              <p className="upsilon-description">
                Description: A giant planet composed mainly of gas, it has no
                solid surface.
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

        <sphereGeometry args={[20.1, 32, 32]} />
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

// <Html
//   as='div' // Wrapping element (default: 'div')
//   wrapperClass // The className of the wrapping element (default: undefined)
//   prepend // Project content behind the canvas (default: false)
//   center // Adds a -50%/-50% css transform (default: false) [ignored in transform mode]
//   fullscreen // Aligns to the upper-left corner, fills the screen (default:false) [ignored in transform mode]
//   distanceFactor={10} // If set (default: undefined), children will be scaled by this factor, and also by distance to a PerspectiveCamera / zoom by a OrthographicCamera.
//   zIndexRange={[100, 0]} // Z-order range (default=[16777271, 0])
//   portal={domnodeRef} // Reference to target container (default=undefined)
//   transform // If true, applies matrix3d transformations (default=false)
//   sprite // Renders as sprite, but only in transform mode (default=false)
//   calculatePosition={(el: Object3D, camera: Camera, size: { width: number; height: number }) => number[]} // Override default positioning function. (default=undefined) [ignored in transform mode]
//   occlude={[ref]} // Can be true or a Ref<Object3D>[], true occludes the entire scene (default: undefined)
//   onOcclude={(visible) => null} // Callback when the visibility changes (default: undefined)
//   {...groupProps} // All THREE.Group props are valid
//   {...divProps} // All HTMLDivElement props are valid
// >
