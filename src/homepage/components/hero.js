import React from "react"
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import '../../common/styles/custom.tachyons.css'
import 'tachyons';

export default (props) => (
  <React.Fragment>
    <Img
      className="w-100 vh-50 mw9 center"
      fluid={props.image}
      alt={props.description} />
    <div
      className="h-auto bg-near-white mw9 w-100 flex flex-column items-center justify-center pv5 ph2 center">
      <span className="fw1 display dark-gray db tc w-100 mw7 f3 f2-ns">{props.title}</span>
      <p className="serif mw6 tc f5 dn dib-l mb4 db">{props.description}</p>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/fMjBEnHiYZM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </React.Fragment>
)
