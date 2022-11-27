import React from 'react'
import Apps from './Client/pages/Apps'

import Snowfall from 'react-snowfall'
// import ParticleBackground from './ParticleBackground'


function Apping() {
  const snow = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none'
  }
  return (
    <div>

      <div style={snow}>

        <Snowfall
          snowflakeCount={70}
        />
      </div>
      {/* <ParticleBackground /> */}
      <Apps />


    </div>
  )
}

export default Apping