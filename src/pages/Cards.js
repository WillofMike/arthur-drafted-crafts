import React from 'react'
import { withRouteData, Link } from 'react-static'

export default withRouteData(({ cardses }) => (
<section>
      <ul className="card-ul">
        {cardses.map((post, i) => (
          <li className="card-li" key={i} >
            <Link to={`/cards/post/${post.id}`} className="card-image">
              <h3 className="card-title">{post.title}</h3>
              <div className="card-placeholder">
                <img
                  className="card-image"
                  alt={post.title}
                  src={`${post.cardImage.url}`}
                  />
                <p className="card-description">{post.description}</p>
              </div>
            </Link>
            {console.log(post)}
          </li>
        ))}
      </ul>
  </section>
))
