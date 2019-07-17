import React, { Component } from 'react'
import Particles from 'react-particles-js'

import ParticlesReturn from '../Class/ParticlesReturn'

class NightSky extends Component {
  constructor(props) {
    super(props)
    this.particlesReturn = new ParticlesReturn()
    this.nightSkyParticles = this.particlesReturn.nightSkyParticles()
  }
  render() {
    return (
      <div>
        <div style={{ zIndex: '100', position: 'relative' }}>
          <h1>Night Sky</h1>
        </div>
        <div>
          <Particles
            params={this.nightSkyParticles}
            style={{
              zIndex: '0',
              width: '100%',
              height: '100%',
              position: 'absolute',
              left: '0px',
              top: 0,
              background: 'rgb(63,76,107)'
            }}
          />
        </div>
      </div>
    )
  }
}

export default NightSky
