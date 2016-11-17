import React from 'react';

const CardContent = () => (
  <div className="content">
    <a className="header">Resource Title</a>
    <div className="meta">
      <i className="star icon"></i>
      <i className="star icon"></i>
      <i className="star icon"></i>
      <i className="star icon"></i>
      <i className="star empty icon"></i>
    </div>
    <div className="description">
      <div className="ui list">
        <div className="item"><strong>Print Length</strong>: 320 pages</div>
        <div className="item"><strong>Author</strong>: Dimitri Ogla</div>
        <div className="item"><strong>Publication Date</strong>: May 21, 2011</div>
      </div>
    </div>
  </div>
);

export default CardContent;
