import React, { Component } from 'react';
import Card from './cards/Card';
import CardLoader from './loaders/CardLoader';

class SiteContent extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const props = this.props;

    return (
      <div className="row">
        <div className="ui four wide column">
          {props.isFetching && <CardLoader />}
          {props.posts.map((data, index) => <Card key={index} {...data} />)}
        </div>
      </div>
    );
  }
}

export default SiteContent;
