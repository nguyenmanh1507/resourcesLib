import React, { Component } from 'react';
import CardDetail from './cards/CardDetail';
import CardDetailThumbnail from './cards/components/CardDetailThumbnail';
import Comments from './comments/Comments';
import CardImageLoader from './loaders/CardImageLoader';
import CardSegmentLoader from './loaders/CardSegmentLoader';

class SiteContentDetail extends Component {
  componentDidMount() {
    const props = this.props;
    // keep window on top
    window.scrollTo(0, 0);

    if (props.resourcesLib.posts.length !== 0) {
      // find post in store if posts not empty
      props.findPost(props.params.id);
    } else {
      // only call api if posts empty
      props.fetchPost(props.params.id);
    }

  }

  render() {
    const post = this.props.resourcesLib.selectedPost;
    // Only show loader if post empty
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
