import React, { Component } from 'react'
import Particles from 'react-particles-js'

import ParticlesReturn from '../Class/ParticlesReturn'

class stars extends Component {
  constructor(props) {
    super(props)
    this.particlesReturn = new ParticlesReturn()
    this.starsParticles = this.particlesReturn.starsParticles()
  }
  render() {
    return (
      <div className={'stars particlesPosition'}>
        <Particles params={this.starsParticles} />
      </div>
    )
  }
}

export default stars
