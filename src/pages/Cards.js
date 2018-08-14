import React from 'react'
import { withRouteData, Link } from 'react-static'

export default withRouteData(({ cardses }) => (
  <section>
    <ul className="home-ul">
      {cardses.map((post, i) => (
        <li className="home-li" key={i} >
          <Link to={`/morepost/${post.id}`} className="home-link">
            <div className="home-placeholder">
            <h3>{post.title}</h3>
              <img
                className="home-link"
                alt={post.title}
                src={`${post.cardImage.url}`}
                />
            </div>
          </Link>
        </li>
      ))}
    </ul>
  </section>
))