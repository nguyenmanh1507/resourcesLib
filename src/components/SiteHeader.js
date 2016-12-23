import React from 'react';
import { Link } from 'react-router';
import NavLink from './nav/NavLink';

const SiteHeader = () => (
  <header className="sixteen wide column">
    <nav className="ui secondary pointing menu">
      <Link to="/" className="item">Home</Link>
      <NavLink to="/books">Books</NavLink>
      <NavLink to="/courses">Courses</NavLink>
      <NavLink to="/onsite-tranning">Onsite Training</NavLink>
      <div className="right menu">
        <Link to="/signin" className="item">
          Sign In
        </Link>
      </div>
    </nav>
  </header>
)

export default SiteHeader
