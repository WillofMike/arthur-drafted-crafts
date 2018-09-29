import React from 'react'
import { withRouteData, Link } from 'react-static'
import Carousel from '../components/Carousel'
import ShowcaseCarousel from '../components/ShowcaseCarousel'
import Process from '../components/Process'
import TaleTimbers from '../components/TaleTimbers'

export default withRouteData(({ taleTimberses }) => (
  <section>
    <Carousel />
    <Process />
    <ShowcaseCarousel />
    <TaleTimbers />
    <p>Some stuff on the home page</p>
  </section>
))
