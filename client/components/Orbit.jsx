import React from 'react'
import { useFrame } from '@react-three/fiber'
import { OrbitControls, Stars, Sparkles, Cloud } from '@react-three/drei'
import * as THREE from 'three'
import planetData from './planetData'
import '../../server/public/main.css'

export default function Orbit() {
  return (
    <>
      <Sun />
      {planetData.map((planet) => (
        <Planet planet={planet} key={planet.id} />
      ))}
      <Lights />
      <OrbitControls />
    </>
  )
}
function Sun() {
  const color = new THREE.Color('hotpink')
  return (
    <mesh>
      <sphereGeometry args={[3, 32, 32]} />
      <Sparkles count={200} scale={2} size={6} speed={1} color={color} />
      <Stars
        count={5000}
        fade={false}
        depth={30}
        speed={0.1}
        factor={20}
        radius={200}
      />
      <Stars
        count={26}
        fade={false}
        depth={0.1}
        speed={0.005}
        factor={0.2}
        radius={(6, 7, 8)}
      />
      <Cloud
        opacity={0.007}
        speed={0.1} // Rotation speed
        width={0.5} // Width of the full cloud
        depth={1} // Z-dir depth
        segments={50} // Number of particles
      />
      {/* <Sparkles count={1000} size={1} speed={0.4} color={THREE.red} /> */}
      <meshStandardMaterial color="#f8ff18" />
    </mesh>
  )
}
function Planet({ planet: { color, xRadius, zRadius, size } }) {
  const planetRef = React.useRef()

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    const x = xRadius * Math.sin(t / 9)
    const z = zRadius * Math.cos(t / 9)
    planetRef.current.position.x = x
    planetRef.current.position.z = z
  })

  return (
    <>
      <mesh ref={planetRef}>
        <sphereGeometry args={[size / 3, 32, 32]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <Ecliptic xRadius={xRadius} zRadius={zRadius} />
    </>
  )
}

function Lights() {
  return (
    <>
      <ambientLight />
      <pointLight position={[0, 0, 0]} />
    </>
  )
}

function Ecliptic({ xRadius = 1, zRadius = 1 }) {
  const points = []
  for (let index = 0; index < 64; index++) {
    const angle = (index / 64) * 2 * Math.PI
    const x = xRadius * Math.cos(angle)
    const z = zRadius * Math.sin(angle)
    points.push(new THREE.Vector3(x, 0, z))
  }

  points.push(points[0])

  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points)
  return (
    <line geometry={lineGeometry}>
      <lineBasicMaterial
        attach="material"
        color="yellow"
        linewidth={30}
        transparent="true"
        opacity={0.2}
      />
    </line>
  )
}
