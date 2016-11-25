import React from 'react';

const CardDetailText = ({ description, uploaderReview }) => (
  <div>
    <h3>Description</h3>
    <p>{description}</p>
    <h3>Uploader review</h3>
    <p>{uploaderReview}</p>
  </div>
);

export default CardDetailText;
