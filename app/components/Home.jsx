import React from 'react'
import { Link } from 'react-router-dom'

export default function Home () {
  return (
    <div>
      <hr />
      <h1>Welcome to Sinclair University Administration</h1>
      <hr />
      <img src="http://cas7dev.vancouver.wsu.edu/sites/cas7dev.vancouver.wsu.edu/files/header-sociology.jpg" />
      <br />
      <Link to="/students"><h2>Manage Students</h2></Link>
      <br />
      <br />
      <img src="https://admin.vancouver.wsu.edu/sites/admin.vancouver.wsu.edu/files/diversity-landing-hood-flowers.jpg" />
      <br />
      <Link to="/campuses"><h2>Manage Campuses</h2></Link>
    </div>
  )
}
