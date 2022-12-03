import React from 'react'
import { useParams } from 'react-router-dom'
import exoplanetsData from '../exoplanetsdata.json'

export default function ExoplanetInfo() {
  const { id } = useParams()
  const exoplanetData = exoplanetsData.find((planets) => planets.id === id)

  return (
    <>
      <div>
        <h2>
          <em>
            <strong>{exoplanetData.name}</strong>
          </em>
        </h2>
        <p>
          <strong>Distance from Earth:</strong>{' '}
          {exoplanetData.distanceFromEarth}
        </p>
        <p>
          <strong>Size:</strong> {exoplanetData.size}
        </p>
        <p>
          <strong>Temperature:</strong> {exoplanetData.temperature}
        </p>
        {/* <p>
          <strong>Atmosphere:</strong> {planetData.atmosphere}
        </p> */}
        <p>
          <strong>Habitability:</strong> {exoplanetData.habitability}
        </p>
      </div>
    </>
  )
}
