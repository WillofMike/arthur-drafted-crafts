import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import { withRouteData, Link } from 'react-static';
import "react-responsive-carousel/lib/styles/carousel.min.css";

 
export default withRouteData(({ cardses }) =>
    <Carousel 
        className='carousel'
        dynamicHeight={true} 
        autoPlay={true}
        infiniteLoop={true}
        stopOnHover={true}
        showStatus={false}
        showThumbs={false}
        useKeyboardArrows={true}
        swipeable={true}
        interval={3000}
        >
    {
        cardses.map((props, index) => (
            <Link to={`/cards/post/${props.id}`}>
                <div key={index}>
                    <img className="legend" src={props.cardImage.url} />
                    <p className='carousel'>{props.title}</p>
                </div>
            </Link>
        ))
    }
    </Carousel>
);
    
// create a seperate cms field for the TWO!!!! different carousels fields: 
// 1. One as a eyegrabber 
// 2. Then the showcase