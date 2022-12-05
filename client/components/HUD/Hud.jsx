import React from 'react'
import Script from './script'
import IndicatorBars, { Levels } from './Left-Side'
import { Html } from '@react-three/drei'

export default function HUD() {
  return (
    <>
      <body className="HUDBody">
        <div className="HUDcontainer">
          <div className="left-part information">
            <IndicatorBars />
            <Levels />
          </div>
          <div className="levels-information"></div>
          <div className="right-part information">
            <ul className="mission-info">
              <li>
                <span>MISSION: EXO-EXO</span>
              </li>
              <li>
                <span>SIZE: 5 TEST SUBJECTS</span>
              </li>
              <li>
                <span>TEAM: HOROEKA</span>
              </li>
              <li>
                <span>RANKING: PRETTY DANG COOL</span>
              </li>
            </ul>
          </div>
        </div>
      </body>
    </>
  )
}

{
  /* <script> src={<Script />}</script> */
}
