import React, { Component } from 'react';
import CardDetail from './cards/CardDetail';
import CardDetailThumbnail from './cards/components/CardDetailThumbnail';
import Comments from './comments/Comments';

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
            this.renderLoader()
          ) : (
            <CardDetailThumbnail {...post} />
          )}
          {isNeedLoader ? (
            this.renderLoader()
          ) : (
            <CardDetail {...post} />
          )}
        </div>
        <div className="ui eight wide column">
          {isNeedLoader ? (
            this.renderLoader()
          ) : (
            <Comments {...post} />
          )}
        </div>
      </div>
    );
  }
}

export default SiteContentDetail;
