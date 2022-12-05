import React from 'react'
export default function HUD() {
  return (
    <>
      <body className="HUDBody">
        <div className="HUDcontainer">
          <div className="left-part information">
            <div className="indicator-bars">
              <div className="indicator-bar">
                <div className="bar bar-1">
                  <div className="inner-bar inner-bar-1"></div>
                  <div className="inner-bar inner-bar-2"></div>
                  <div className="inner-bar inner-bar-3"></div>
                  <div className="inner-bar inner-bar-4"></div>
                  <div className="inner-bar inner-bar-5"></div>
                  <div className="inner-bar inner-bar-6"></div>
                  <div className="inner-bar inner-bar-7"></div>
                  <div className="inner-bar inner-bar-8"></div>
                  <div className="inner-bar inner-bar-9"></div>
                  <div className="inner-bar inner-bar-10"></div>
                </div>
              </div>
              <div className="indicator-bar">
                <div className="bar bar-2">
                  <div className="inner-bar inner-bar-1"></div>
                  <div className="inner-bar inner-bar-2"></div>
                  <div className="inner-bar inner-bar-3"></div>
                  <div className="inner-bar inner-bar-4"></div>
                  <div className="inner-bar inner-bar-5"></div>
                  <div className="inner-bar inner-bar-6"></div>
                  <div className="inner-bar inner-bar-7"></div>
                  <div className="inner-bar inner-bar-8"></div>
                  <div className="inner-bar inner-bar-9"></div>
                  <div className="inner-bar inner-bar-10"></div>
                </div>
              </div>
              <div className="indicator-bar">
                <div className="bar bar-3">
                  <div className="inner-bar inner-bar-1"></div>
                  <div className="inner-bar inner-bar-2"></div>
                  <div className="inner-bar inner-bar-3"></div>
                  <div className="inner-bar inner-bar-4"></div>
                  <div className="inner-bar inner-bar-5"></div>
                  <div className="inner-bar inner-bar-6"></div>
                  <div className="inner-bar inner-bar-7"></div>
                  <div className="inner-bar inner-bar-8"></div>
                  <div className="inner-bar inner-bar-9"></div>
                  <div className="inner-bar inner-bar-10"></div>
                </div>
              </div>
              <div className="indicator-bar">
                <div className="bar bar-4">
                  <div className="inner-bar inner-bar-1"></div>
                  <div className="inner-bar inner-bar-2"></div>
                  <div className="inner-bar inner-bar-3"></div>
                  <div className="inner-bar inner-bar-4"></div>
                  <div className="inner-bar inner-bar-5"></div>
                  <div className="inner-bar inner-bar-6"></div>
                  <div className="inner-bar inner-bar-7"></div>
                  <div className="inner-bar inner-bar-8"></div>
                  <div className="inner-bar inner-bar-9"></div>
                  <div className="inner-bar inner-bar-10"></div>
                </div>
              </div>
              <div className="indicator-bar">
                <div className="bar bar-5">
                  <div className="inner-bar inner-bar-1"></div>
                  <div className="inner-bar inner-bar-2"></div>
                  <div className="inner-bar inner-bar-3"></div>
                  <div className="inner-bar inner-bar-4"></div>
                  <div className="inner-bar inner-bar-5"></div>
                  <div className="inner-bar inner-bar-6"></div>
                  <div className="inner-bar inner-bar-7"></div>
                  <div className="inner-bar inner-bar-8"></div>
                  <div className="inner-bar inner-bar-9"></div>
                  <div className="inner-bar inner-bar-10"></div>
                </div>
              </div>
              <ul>
                <li>POWER</li>
                <li>REAR ENGINE</li>
                <li>FRONT ENGINE</li>
                <li>SHIELD</li>
                <li>WEAPONS</li>
              </ul>
            </div>
            <ul className="levels">
              <li>
                <div className="charge charge-1"></div>
                <div className="li-content">
                  <div>OXYGEN</div>
                </div>
              </li>
              <li>
                <div className="charge charge-2"></div>
                <div className="li-content">
                  <div>RADIATION</div>
                </div>
              </li>
              <li>
                <div className="charge charge-3"></div>
                <div className="li-content">
                  <div>OZONE</div>
                </div>
              </li>
              <li>
                <div className="charge charge-4"></div>
                <div className="li-content">
                  <div>HUMIDITY</div>
                </div>
              </li>
              <li>
                <div className="charge charge-5"></div>
                <div className="li-content">
                  <div>SIGNS OF LIFE</div>
                </div>
              </li>
            </ul>
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
