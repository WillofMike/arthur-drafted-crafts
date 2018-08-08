import React, { Fragment } from 'react'
import { withRouteData } from 'react-static'

export default withRouteData(({ cardses }) => (
  <Fragment>
    {cardses.map((author, index) => (
      <div className="about-author" key={index}>
        <div className="about-header">
          <img
            className="about-avatar"
            alt={author.title}
            src={`${author.cardImage.url}`}
          />
          <h1>Hello! My name is {author.description}</h1>
        </div>
        <p>{author.description}</p>
      </div>
    ))}
  </Fragment>
))
