import React, { PropTypes } from 'react';
import CardDetailInfo from './components/CardDetailInfo';
import CardDetailText from './components/CardDetailText';

const CardDetail = (props) => (
  <div className="ui segment">
    <h2>{props.title}</h2>
    <div>
      <i className="star icon"></i>
      <i className="star icon"></i>
      <i className="star icon"></i>
      <i className="star icon"></i>
      <i className="star empty icon"></i>
    </div>
    <CardDetailInfo {...props} />
    <CardDetailText {...props} />
  </div>
);

CardDetail.propsTypes = {
  title: PropTypes.string,
};

export default CardDetail;
