import React, { Component } from 'react';
import CardImage from './components/CardImage';
import CardTopMeta from './components/CardTopMeta';
import CardContent from './components/CardContent';
import CardExtraContent from './components/CardExtraContent';

class Card extends Component {
  render() {
    const props = this.props;

    return (
      <article className="card pink">
        <CardTopMeta uploader={props.uploader} />
        <CardImage thumbnail={props.thumbnail} postId={props.id} />
        <CardContent {...props} />
        <CardExtraContent />
      </article>
    );
  }
}

export default Card;
