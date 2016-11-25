import React, { Component } from 'react';
import $ from 'jquery';
import '../../../assets/scripts/rating';

class CardRating extends Component {
  componentDidMount() {
    $('.ui.rating').rating();
  }

  componentDidUpdate(prevProps, prevState) {
    // set correct rating when view detail post
    $(this.ratingEl).rating();
  }

  render() {
    return (
      <div className="meta">
        <div
          className="ui star rating"
          data-rating={this.props.rating}
          data-max-rating="5"
          ref={ref => {this.ratingEl = ref}}
        ></div>
      </div>
    );
  }
}

export default CardRating;
