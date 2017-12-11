import React from 'react'
import { Link } from 'react-router-dom'

export default function Home () {
  return (
    <div>
      <hr />
      <h1>Welcome to Sinclair University Administration</h1>
      <hr />
      <img src="https://www.mtu.edu/publicsafety/crime/education/images/campus-mall-800banner.jpg" />
      <br />
      <Link to="/students"><h2>Manage Students</h2></Link>
      <br />
      <br />
      <img src="http://web.wellesley.edu/SocialComputing/Images/bannertop.gif" />
      <br />
      <Link to="/campuses"><h2>Manage Campuses</h2></Link>
    </div>
  )
}
