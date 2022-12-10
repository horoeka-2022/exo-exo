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
                  'I am part of the universe',
                  'And the universe is part of me',
                  'For I am crafted from stardust',
                  'From the cosmos and beyond',
                  '-  "I am Part of the Universe" by Clive Blake',
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
              enter to discover new worlds
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}
