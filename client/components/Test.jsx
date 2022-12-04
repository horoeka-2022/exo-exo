import { Html } from '@react-three/drei'
import React, { useRef, useState, useEffect } from 'react'

export default function Test() {
  return (
    <Html distanceFactor={5} position={[0, 0, 0]}>
      <div className="card">
        <div className="kepler-card-image"></div>
        <div className="card-text"></div>
        <span className="date">Discovery: 2011</span>
        <h2>Kepler 22b</h2>
        <p>Super Earth</p>
      </div>
    </Html>
  )
}
