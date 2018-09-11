import React from 'react'
import { withRouteData, Link } from 'react-static'
import Carousel from '../components/Carousel'

export default withRouteData(({ furnitures }) => (
  <section>
    <Carousel />
    <p>Some stuff on the home page</p>
  </section>
))
