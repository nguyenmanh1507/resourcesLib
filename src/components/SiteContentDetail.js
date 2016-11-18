import React, { Component } from 'react';
import CardDetail from './cards/CardDetail';
import CardDetailThumbnail from './cards/components/CardDetailThumbnail';
import Comments from './comments/Comments';
import CardImageLoader from './loaders/CardImageLoader';
import CardSegmentLoader from './loaders/CardSegmentLoader';

class SiteContentDetail extends Component {
  componentDidMount() {
    this.props.fetchPost(this.props.params.id);
  }

  renderLoader() {
    return (
      <div className="ui segment">
        <div className="ui active dimmer">
          <div className="ui loader"></div>
        </div>
      </div>
    );
  }

  render() {
    const post = this.props.selectedPost;
    const isNeedLoader = !post;

    return(
      <div className="row">
        <div className="ui eight wide column">
          {isNeedLoader ? (
            <CardImageLoader />
          ) : (
            <CardDetailThumbnail {...post} />
          )}
          {isNeedLoader ? (
            <CardSegmentLoader />
          ) : (
            <CardDetail {...post} />
          )}
        </div>
        <div className="ui eight wide column">
          {isNeedLoader ? (
            <CardSegmentLoader />
          ) : (
            <Comments {...post} />
          )}
        </div>
      </div>
    );
  }
}

export default SiteContentDetail;
