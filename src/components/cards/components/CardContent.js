import React from 'react';
import { Link } from 'react-router';
import CardRating from './CardRating';

const CardContent = ({
  id,
  title,
  printLength,
  author,
  publicationDate,
  rating,
}) => (
  <div className="content">
    <Link to={`post/${id}`} className="header">{title}</Link>
    <CardRating rating={rating} />
    <div className="description">
      <div className="ui list">
        <div className="item"><strong>Print Length</strong>: {printLength} pages</div>
        <div className="item"><strong>Author</strong>: {author}</div>
        <div className="item"><strong>Publication Date</strong>: {publicationDate}</div>
      </div>
    </div>
  </div>
);

export default CardContent;
