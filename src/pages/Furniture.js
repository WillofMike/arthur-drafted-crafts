import React from 'react'
import { withRouteData, Link } from 'react-static'

export default withRouteData(({ furnitures }) => (
  <section>
    <ul className="home-ul">
      {furnitures.map((post, i) => (
        <li className="home-li" key={i} >
          <Link to={`/furniture/post/${post.id}`} className="home-link">
            <div className="home-placeholder">
            <h3>{post.title}</h3>
              <img
                className="home-link"
                alt={post.title}
                src={`${post.image.url}`}
                />
            </div>
          </Link>
        </li>
      ))}
    </ul>
  </section>
))
