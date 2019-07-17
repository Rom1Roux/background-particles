import React, { Component } from 'react'
import Particles from 'react-particles-js'

import ParticlesReturn from '../Class/ParticlesReturn'

class Snow extends Component {
  constructor(props) {
    super(props)
    this.particlesReturn = new ParticlesReturn()
    this.snowParticles = this.particlesReturn.snowParticles()
  }
  render() {
    return (
      <div>
        <div style={{ zIndex: '100', position: 'relative' }}>
          <h1>Snow Particles</h1>
        </div>
        <div>
          <Particles
            params={this.snowParticles}
            style={{
              zIndex: '0',
              width: '100%',
              height: '100%',
              position: 'absolute',
              left: '0px',
              top: 0,
              background:
                'linear-gradient(to right, rgba(226,226,226,1) 0%, rgba(219,219,219,1) 11%, rgba(209,209,209,1) 51%, rgba(254,254,254,1) 100%)'
            }}
          />
        </div>
      </div>
    )
  }
}

export default Snow
