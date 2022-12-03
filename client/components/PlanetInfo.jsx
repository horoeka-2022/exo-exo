import React from 'react'
import { useParams } from 'react-router-dom'
import planetsData from '../exoplanetsdata.json'

export default function PlanetInfo() {
  const { id } = useParams()
  const planetData = planetsData.find((planets) => planets.id === id)

  return (
    <>
      <div>
        <h2>
          <em>
            <strong>{planetData.name}</strong>
          </em>
        </h2>
        <p>
          <strong>Distance from Earth:</strong> {planetData.distanceFromEarth}
        </p>
        <p>
          <strong>Size:</strong> {planetData.size}
        </p>
        <p>
          <strong>Temperature:</strong> {planetData.temperature}
        </p>
        {/* <p>
          <strong>Atmosphere:</strong> {planetData.atmosphere}
        </p> */}
        <p>
          <strong>Habitability:</strong> {planetData.habitability}
        </p>
      </div>
    </>
  )
}
