import React, { Component } from 'react';
import CardDetail from './cards/CardDetail';
import Comments from './comments/Comments';

class SiteContentDetail extends Component {
  render() {
    return(
      <div className="row">
        <div className="ui eight wide column">
          <img src="http://placehold.it/320x180" className="ui fluid bordered rounded image" alt="Resource Thumbnail" />
          <CardDetail />
        </div>
        <div className="ui eight wide column">
          <Comments />
        </div>
      </div>
    );
  }
}

export default SiteContentDetail;
