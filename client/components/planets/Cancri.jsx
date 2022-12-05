import React, { useRef } from 'react'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import CancriMap from '../../../server/public/textures/2k_sun.jpeg'
import { useFrame, useLoader } from '@react-three/fiber'
import { EffectComposer, Bloom, GodRays } from '@react-three/postprocessing'

export default function Cancri({ position, args }) {
  const textureMap = useLoader(TextureLoader, CancriMap)
  const cancriRef = useRef()

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()
    cancriRef.current.rotation.y = elapsedTime / 6
  })
  return (
    <>
      <mesh ref={cancriRef} position={position}>
        <sphereGeometry args={args} />
        <meshStandardMaterial map={textureMap} scale={5} />
      </mesh>
        {/* <GodRays
          cancri={cancriRef.current}
          samples={30}
          density={0.97}
          decay={0.96}
          weight={0.6}
          exposure={0.4}
          clampMax={1}
          blur={true}
        /> */}
        <EffectComposer>
          <Bloom
            luminanceThreshold={0.5}
            luminanceSmoothing={0.9}
            height={300}
            opacity={3}
          />
      </EffectComposer>
    </>
  )
}
