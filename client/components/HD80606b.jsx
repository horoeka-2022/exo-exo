import React, { useRef } from 'react'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import { motion } from 'framer-motion-3d'
import HD80606bMap from '../../server/public/HD80606b.jpg'
import HD80606bClouds from '../../server/public/cloudsred.png'

export default function HD80606b({ position, args }) {
  const [colorMap, cloudMap] = useLoader(TextureLoader, [
    HD80606bMap,
    HD80606bClouds,
  ])
  const HD80606bRef = useRef()
  const AtmosphereRef = useRef()

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()
    HD80606bRef.current.rotation.y = elapsedTime / 6
    AtmosphereRef.current.rotation.y = elapsedTime / 2
  })

  return (
    <>
      {/* Main Layer */}
      <motion.mesh
        whileHover={{ scale: 6 }}
        whileTap={{ scale: 8 }}
        ref={HD80606bRef}
        position={position}
      >
        {/* <ambientLight intensity={0.2} />
        <spotLight position={[5, 10, 5]} angle={0.6} intensity={0.8} /> */}
        <sphereGeometry args={args} />
        <meshStandardMaterial map={colorMap} />
      </motion.mesh>

      {/* Atmosphere layer */}
      <motion.mesh
        whileHover={{ scale: 6 }}
        whileTap={{ scale: 8 }}
        ref={AtmosphereRef}
        position={position}
      >
        <ambientLight intensity={0.2} />
        <spotLight position={[5, 10, 5]} angle={0.6} intensity={1} />
        <sphereGeometry args={[0.3015, 32, 32]} />
        <meshStandardMaterial
          map={cloudMap}
          opacity={0.4}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </motion.mesh>
    </>
  )
}
