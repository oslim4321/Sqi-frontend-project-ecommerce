import React from 'react';
import Particles from 'react-particles-js'
import particuleConfig from './Config/config_particul'

function ParticleBackground() {
    return (
        <Particles params={particuleConfig}></Particles>
    )
}

export default ParticleBackground