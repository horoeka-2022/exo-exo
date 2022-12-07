import React from 'react'

export default function Levels() {
  return (
    <ul className="levels">
      <li>
        <div className="charge charge-1"></div>
        <div className="li-content">
          <div>SHIP AIR CIRCULATION</div>
          <div className="cube">
            <div className="dot"></div>
          </div>
        </div>
      </li>
      <li>
        <div className="charge charge-2"></div>
        <div className="li-content">
          <div>DISTANCE FROM EARTH: </div>
          <div className="cube">
            <div className="dot"></div>
          </div>
        </div>
      </li>
      <li>
        <div className="charge charge-3"></div>
        <div className="li-content">
          <div>HABITABLE</div>
          <div className="cube">
            <div className="dot"></div>
          </div>
        </div>
      </li>
      <li>
        <div className="charge charge-4"></div>
        <div className="li-content">
          <div>ATMOSPHERE</div>
          <div className="cube">
            <div className="dot"></div>
          </div>
        </div>
      </li>
      <li>
        <div className="charge charge-5"></div>
        <div className="li-content">
          <div>TEMPERATURE</div>
          <div className="cube">
            <div className="dot"></div>
          </div>
        </div>
      </li>
    </ul>
  )
}
