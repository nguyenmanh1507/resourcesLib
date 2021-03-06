import React from 'react';

const CardTopMeta = props => (
  <div className="extra content">
    <div className="right floated meta">14h</div>
    <img className="ui avatar image" src="http://placehold.it/60x60" alt="Author thumbnail" /> {props.uploader}
  </div>
);

export default CardTopMeta;
