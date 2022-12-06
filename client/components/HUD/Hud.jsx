import React from 'react'
import IndicatorBars from './IndicatorBars'
import Levels from './Levels'

export default function HUD() {
  return (
    <>
      <body className="HUDBody">
        <div className="HUDcontainer">
          <div className="left-part information">
            <IndicatorBars />
            {/* <Levels /> */}
            <div className="right-part information">
              <ul className="mission-info">
                <li>
                  <span>
                    <strong>TEAM EXO-EXO</strong>
                  </span>
                </li>
                <li>
                  <span>SIZE: 5 test subjects</span>
                </li>

                <li>
                  <span>MISSION: Find planet to sustain human life</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </body>
    </>
  )
}

{
  /* <script> src={<Script />}</script> */
}
