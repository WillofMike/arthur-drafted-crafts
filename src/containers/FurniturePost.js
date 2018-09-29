import React from 'react'
import { withRouteData } from 'react-static'
import Markdown from 'react-markdown'

export default withRouteData(({ post }) => (
  <article>
    <div className="card-ul"> 
    <div className="card-li">
      <h3 className="card-title">{post.title}</h3>
      <div className="card-placeholder">
        <img
          className="card-image"
          alt={post.title}
          src={`${post.image.url}`}
          />
      <div>
        <p className="card-description">{post.description}</p>
      </div>
      </div>
        <div>
          <p className="card-description">Cost: {post.price}</p>
        </div>
{console.log(post)}
    </div>
    </div>
  </article>
))
