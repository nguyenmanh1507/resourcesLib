import React from 'react';
import { Link } from 'react-router';

const SiteHeader = () => (
  <header className="sixteen wide column">
    <nav className="ui secondary pointing menu">
      <Link to="/" className="item">Home</Link>
      <Link to="/books" className="item" activeClassName="active">Books</Link>
      <Link to="/courses" className="item" activeClassName="active">Courses</Link>
      <Link to="/onsite-tranning" className="item" activeClassName="active">Onsite Training</Link>
      <div className="right menu">
        <Link to="/signup" className="item" activeClassName="active">
          Sign Up
        </Link>
        <Link to="/signin" className="item" activeClassName="active">
          Sign In
        </Link>
      </div>
    </nav>
  </header>
)

export default SiteHeader
