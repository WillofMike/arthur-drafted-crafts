import React from 'react'
import { withRouteData } from 'react-static'
import Markdown from 'react-markdown'

export default withRouteData(({ post }) => (
  <article>
    <h1>{post.title}</h1>
    <div className="placeholder">
      <img
        alt={post.title}
        src={`${post.laserImage.url}`}
      />
    </div>
    <Markdown
      source={post.description}
      escapeHtml={false}
    />
{console.log(post)}
    
  </article>
))
