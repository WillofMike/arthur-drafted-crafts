import React from 'react'
import { withRouteData, Link } from 'react-static'

export default withRouteData(({ engravingses }) => (
  <section>
    <ul className="home-ul">
      {engravingses.map((post, i) => (
        <li className="home-li" key={i} >
          <Link to={`/stuffpost/${post.id}`} className="home-link">
          {console.log('This is the engravings post', post)}
            <div className="home-placeholder">
            <h3>{post.title}</h3>
              <img
                className="home-link"
                alt={post.title}
                src={`${post.laserImage.url}`}
                />
            </div>
          </Link>
        </li>
      ))}
    </ul>
  </section>
))
