import React from 'react'
import { withRouteData } from 'react-static'
import { Icon } from 'react-icons-kit'
import {smartphone} from 'react-icons-kit/feather/smartphone'
import {envelopeO} from 'react-icons-kit/fa/envelopeO'
import {truck} from 'react-icons-kit/fa/truck'
import {ship} from 'react-icons-kit/fa/ship'

export default withRouteData(({ cardses }) => (
  <section className="icon-section">
  <h1 className="icon-title">How it Works</h1>
    <div>
      <div className="icon-container">
        <div className="icon-cell">
            <h2 className="icon-h2">Call</h2>
                <Icon size={'20%'} icon={smartphone} />
        </div>
        <div className="icon-cell" id="envelope-cell">        
            <h2 className="icon-h2">Mail Us</h2>
                <Icon size={'20%'} icon={envelopeO} />
        </div>
        <div className="icon-cell">        
            <h2 className="icon-h2">We'll Deliver</h2>
                <Icon size={'20%'} icon={truck} />
        </div>
        <div className="icon-cell" id="ship-cell">        
            <h2 className="icon-h2">We'll Ship</h2>
                <Icon size={'20%'} icon={ship} />
        </div>
      </div>
    </div>
  </section>
))
