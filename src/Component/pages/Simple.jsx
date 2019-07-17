import React, { Component } from 'react'
import Particles from 'react-particles-js'

import ParticlesReturn from '../Class/ParticlesReturn'

class Simple extends Component {
  constructor(props) {
    super(props)
    this.particlesReturn = new ParticlesReturn()
    this.simpleParticles = this.particlesReturn.simpleParticles()
  }
  render() {
    return (
      <div>
        <div style={{ zIndex: '100', position: 'relative' }}>
          <h1>Simple Particules</h1>
        </div>
        <div>
          <Particles
            params={this.simpleParticles}
            style={{
              zIndex: '0',
              width: '100%',
              height: '100%',
              position: 'absolute',
              left: '0px',
              top: 0,
              backgroundColor: 'rgba(18, 215, 35, 0.2)'
            }}
          />
        </div>
      </div>
    )
  }
}

export default Simple
