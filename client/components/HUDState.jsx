import React, { useState } from 'react'
import HUD from './HUD/Hud'
import Kepler22b from '../components/planets/Kepler22b'

import data from '../data'

export default function HUDState() {
  

  return (
    <>
      <HUD setID={setID} /> <Kepler22b id={id} />
    </>
  )
}
