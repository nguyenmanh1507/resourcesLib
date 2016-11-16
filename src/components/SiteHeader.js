import React from 'react';

const SiteHeader = () => (
  <header className="sixteen wide column">
    <nav className="ui secondary pointing menu">
      <a className="item active">Home</a>
      <a className="item">Books</a>
      <a className="item">Courses</a>
      <a className="item">Onsite Training</a>
      <div className="right menu">
        <a href="/" className="ui item">
          Sign Up
        </a>
        <a href="/" className="ui item">
          Sign In
        </a>
      </div>
    </nav>
  </header>
)

export default SiteHeader
