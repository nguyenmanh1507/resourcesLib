import React from 'react';
import { Link } from 'react-router';

const CardContent = ({
  id,
  title,
  printLength,
  author,
  publicationDate,
}) => (
  <div className="content">
    <Link to={`post/${id}`} className="header">{title}</Link>
    <div className="meta">
      <i className="star icon"></i>
      <i className="star icon"></i>
      <i className="star icon"></i>
      <i className="star icon"></i>
      <i className="star empty icon"></i>
    </div>
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
