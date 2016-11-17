import React from 'react';
import { Link } from 'react-router';

const CardImage = () => (
  <Link to="/post/1" className="image">
    <img src="http://placehold.it/320x180" alt="Resource thumbnail" />
  </Link>
);

export default CardImage;
