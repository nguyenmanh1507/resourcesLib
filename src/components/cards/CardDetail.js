import React, { PropTypes } from 'react';
import CardDetailInfo from './components/CardDetailInfo';
import CardDetailText from './components/CardDetailText';
import CardRating from './components/CardRating';

const CardDetail = props => (
  <div className="ui segment">
    <h2>{props.title}</h2>
    <CardRating rating={props.rating} />
    <CardDetailInfo {...props} />
    <CardDetailText {...props} />
  </div>
);

CardDetail.propsTypes = {
  title: PropTypes.string,
};

export default CardDetail;
