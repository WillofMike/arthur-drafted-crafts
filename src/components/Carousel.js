import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import { withRouteData } from 'react-static';
import "react-responsive-carousel/lib/styles/carousel.min.css";

 
export default withRouteData(({ furnitures }) =>
    <Carousel dynamicHeight infiniteLoop >
    {
        furnitures.map((props, index) => (
            <div key={index}>
               <img className="legend" src={props.image.url} />
               <p>Legend</p>
            </div>
        ))
    }
    </Carousel>
);
    
// look through the trouble shooting and emulate what they're doing in the docs. You're making this more difficult than it is!