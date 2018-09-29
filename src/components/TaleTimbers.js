import React from 'react'
import { withRouteData } from 'react-static'

export default withRouteData(({ taleTimberses }) => (
  <section className="timber-section">
  <h1 className="timber-title">The Tale of Timbers</h1>
    <div>
      <div className="timber-container">
        <div className="timber-cell">
            <h2 className="timber-h2">{taleTimberses[0].title}</h2>
            <img className="timber-image" src={taleTimberses[0].timberImage.url} />
        </div>
        <div className="timber-cell" id="envelope-cell">        
        <h2 className="timber-h2">{taleTimberses[1].title}</h2>
            <img className="timber-image" src={taleTimberses[1].timberImage.url} />
        </div>
        <div className="timber-cell">        
            <h2 className="timber-h2">{taleTimberses[2].title}</h2>
            <img className="timber-image" src={taleTimberses[2].timberImage.url} />
        </div>
      </div>
    </div>
  </section>
))
