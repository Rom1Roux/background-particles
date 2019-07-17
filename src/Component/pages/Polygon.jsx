import React, { Component } from 'react'
import Particles from 'react-particles-js'

import ParticlesReturn from '../Class/ParticlesReturn'

class Polygon extends Component {
  constructor(props) {
    super(props)
    this.particlesReturn = new ParticlesReturn()
    this.polygonParticles = this.particlesReturn.polygonParticles()
  }
  render() {
    return (
   <div>
        <div style={{ zIndex: '100', position: 'relative' }}>
          <h1 style={{color: 'white'}}>Polygon</h1>
        </div>
          <div>
          <Particles
            params={this.polygonParticles}
            style={{
              zIndex: '0',
              width: '100%',
              height: '100%',
              position: 'absolute',
              left: '0px',
              top: 0,
              background: 'black'
            }}
          />
        </div>
      </div>
    )
  }
}

export default Polygon
