import React from 'react';
import { Link } from 'react-router';

const CardImage = props => (
  <Link to={`post/${props.postId}`} className="image">
    <img src={props.thumbnail} alt="Resource thumbnail" />
  </Link>
);

export default CardImage;
