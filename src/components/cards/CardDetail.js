import React from 'react';
import CardDetailInfo from './components/CardDetailInfo';
import CardDetailText from './components/CardDetailText';

const CardDetail = () => (
  <div className="ui segment">
    <h2>The Day The Crayons Quit</h2>
    <div>
      <i className="star icon"></i>
      <i className="star icon"></i>
      <i className="star icon"></i>
      <i className="star icon"></i>
      <i className="star empty icon"></i>
    </div>
    <CardDetailInfo />
    <CardDetailText />
  </div>
);

export default CardDetail;
