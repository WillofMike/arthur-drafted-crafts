import React from 'react'
import { withRouteData, Link } from 'react-static'

export default withRouteData(({ furnitures }) => (
  <section>
    <ul className="home-ul">
      {furnitures.map((post, index) => (
        <li className="home-li" key={index}>
          <Link to={`/post/${post.slug}`} className="home-link">
            <div className="home-placeholder">
              <img
                className="home-link"
                alt={post.title}
                src={`${post.image.url}`}
              />
            </div>
            <h3>{post.title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  </section>
))
