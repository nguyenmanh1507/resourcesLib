import React, { Component } from 'react';
import Card from './cards/Card';
import CardLoader from './loaders/CardLoader';

class SiteContent extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const props = this.props;
    // only show loader if posts data empty
    const isNeedShowLoader = (props.posts.length === 0);

    return (
      <div className="row">
        <div className="ui sixteen wide column">
          <div className="ui four stackable cards">
            {isNeedShowLoader && (
              [0, 1, 2, 3].map(index => <CardLoader key={index} />)
            )}
            {props.posts.map((data, index) => <Card key={index} {...data} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default SiteContent;
