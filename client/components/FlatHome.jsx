import React, { useState, useEffect } from 'react'
import { extend } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import Wait from './Wait'
import Planets from './Planets'

// THIS IS A ROUGH TEMPLATE FROM SILENT SPRING , LETS CHANGE STUFF 
export default function FlatHome () {
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        document.location.reload(false)
      }
    }
    document.addEventListener('keydown', handleEsc)

    return () => {
      document.removeEventListener('keydown', handleEsc)
    }
  }, [])

  useEffect(() => {
    const handleEnter = (event) => {
      if (event.keyCode === 13) {
        setIsPlaying(true)
      }
    }
    document.addEventListener('keydown', handleEnter)

    return () => {
      document.removeEventListener('keydown', handleEnter)
    }
  }, [])

  extend({ OrbitControls })

  return (
    <div className="background-home">

    <div className="mainDiv">{isPlaying ? <Planets /> : <Wait />}</div>
    </div>
  )
}

export default FlatHome