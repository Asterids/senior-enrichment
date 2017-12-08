import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar () {

    return (
      <div>
        <section>
          <h3>
            <Link to="/">HOME</Link>
          </h3>
        </section>
        <section>
          <h3>
            <Link to="/students">STUDENTS</Link>
          </h3>
        </section>
        <section>
          <h3>
            <Link to="/campuses">CAMPUSES</Link>
          </h3>
        </section>
      </div>
    )

}
