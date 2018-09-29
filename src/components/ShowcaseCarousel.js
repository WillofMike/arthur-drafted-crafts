import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import { withRouteData, Link } from 'react-static';
import "react-responsive-carousel/lib/styles/carousel.min.css";

 
export default withRouteData(({ taleTimberses }) =>
<section >
    <Carousel 
        className='presentation-mode'
        dynamicHeight={false} 
        autoPlay={true}
        infiniteLoop={true}
        stopOnHover={true}
        showStatus={false}
        showThumbs={false}
        useKeyboardArrows={true}
        swipeable={true}
        interval={5000}
        >
    {
        taleTimberses.map((props, index) => (
            <Link to={`/cards/post/${props.id}`} key={index}>
                <div>
                    <p className='showcase-carousel'>{props.title}</p>
                    <img className='my-slide secondary complex showcase-carousel-image' src={props.timberImage.url} />
                </div>
            </Link>
        ))
    }
    </Carousel>
</section>
);
    
// create a seperate cms field for the TWO!!!! different carousels fields: 
// 1. One as a eyegrabber of who they are (pictures) and what they make and how long they've been making it 
// 2. Then the showcase