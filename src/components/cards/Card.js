import React, { Component } from 'react';
import CardImage from './components/CardImage';
import CardTopMeta from './components/CardTopMeta';
import CardContent from './components/CardContent';
import CardExtraContent from './components/CardExtraContent';

class Card extends Component {
  render() {
    return (
      <article className="ui card">
        <CardTopMeta uploader={this.props.uploader} />
        <CardImage thumbnail={this.props.thumbnail} />
        <CardContent {...this.props} />
        <CardExtraContent />
      </article>
    );
  }
}

export default Card;
