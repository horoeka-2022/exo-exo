import React from 'react'
import { useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
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
  return (
    <mesh>
      <sphereGeometry args={[6, 32, 32]} />
      <meshStandardMaterial color="#E1DC59" />
    </mesh>
  )
}
function Planet({ planet: { color, xRadius, zRadius, size } }) {
  const planetRef = React.useRef()

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    const x = xRadius * Math.sin(t / 8)
    const z = zRadius * Math.cos(t / 8)
    planetRef.current.position.x = x
    planetRef.current.position.z = z
  })

  return (
    <>
      <mesh ref={planetRef}>
        <sphereGeometry args={[size, 32, 32]} />
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

function Ecliptic({ xRadius = 2, zRadius = 2 }) {
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
        color="hotpink"
        linewidth={20}
        transparent="true"
        opacity={0.5}
      />
    </line>
  )
}
