import React from 'react'
import { withRouteData, Link } from 'react-static'

export default withRouteData(({ engravingses }) => (
  <section>
      <ul className="card-ul">
        {engravingses.map((post, i) => (
          <li className="card-li" key={i} >
            <Link to={`/engravings/post/${post.id}`} className="card-image">
              <h3 className="card-title">{post.title}</h3>
              <div className="card-placeholder">
                <img
                  className="card-image"
                  alt={post.title}
                  src={`${post.laserImage.url}`}
                  />
              <div>
                <p className="card-description">{post.description}</p>
              </div>
              </div>
            </Link>
            {console.log(post)}
          </li>
        ))}
      </ul>
  </section>
))
