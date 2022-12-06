import React, { useRef } from 'react'
import { extend, useThree, useFrame } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

extend({ OrbitControls })

const CameraControls = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree()

  // Ref to the controls, so that we can update them on every frame with useFrame
  const controls = useRef()

  camera.position.z = 999

  useFrame(() => controls.current.update())

  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      enableZoom={false}
      enablePan={false}
      // minPolarAngle={0}
      // maxPolarAngle={Math.PI / 1.75}
      minDistance={2}
      autoRotateSpeed={0.2}
      maxDistance={500}
      makeDefault
      minPolarAngle={0}
      maxPolarAngle={Math.PI / 1.75}
      autoRotate={true}
      autoRotateSpeed={0.2}
    />
  )
}

export default CameraControls

// keys={{
//   LEFT: 'ArrowLeft', //left arrow
//   UP: 'ArrowUp', // up arrow
//   RIGHT: 'ArrowRight', // right arrow
//   BOTTOM: 'ArrowDown', // down arrow
// }}
// listenToKeyEvents={window}
