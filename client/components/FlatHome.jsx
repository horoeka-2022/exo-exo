import React from 'react'
import { Link } from 'react-router-dom'
import Typing from './Typing'
import { AnimatePresence, motion } from 'framer-motion'

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
              <Typing
                line={
                  'An exoplanet is any planet beyond our solar system. Most orbit other stars, but free-floating exoplanets, called rogue planets, orbit the galactic center and are untethered to any star.'
                }
                typeSpeed={60}
              />
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
