import React from 'react'
import { Link } from 'react-router-dom'
import { Typewriter } from 'react-simple-typewriter'

export default function FlatHome() {
  function handleClick() {}
  return (
    <>
      <div className="home-body">
        <div className="title-center">
          <h1 className="home-title">exo exo</h1>
        </div>
        <div className="centering">
          <p className="home-type">
            <div className="home-div">
              <Typewriter
                words={[
                  'An exoplanet is any planet beyond our solar system.',
                  'Some are more habitable than others...',
                  'Enter to discover more worlds.',
                ]}
                typeSpeed={50}
                deleteSpeed={20}
                loop={1}
                delaySpeed={2500}
              />
              {/* <Typing
                line={'Enter to discover more worlds beyond our solar system.'}
                typeSpeed={60}
              /> */}
            </div>
          </p>
        </div>
        <div className="button-center">
          <Link to="/main">
            <button className="button-style" onClick={handleClick}>
              enter
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}
