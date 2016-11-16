import React from 'react';
import { Link } from 'react-router';

const NavLink = props => (
  <Link {...props} className="item" activeClassName="active" />
)

export default NavLink;
