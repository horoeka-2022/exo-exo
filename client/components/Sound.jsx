import React from 'react'
import Sound from 'react-sound'
import SpaceMusic from '../../server/public/SpaceMusic.mp3'

export default function Music() {
  return <Sound url={SpaceMusic} playStatus={Sound.status.PLAYING} />
}
