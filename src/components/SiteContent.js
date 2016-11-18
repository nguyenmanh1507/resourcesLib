import React, { Component } from 'react';
import Card from './cards/Card';
import CardLoader from './loaders/CardLoader';

class SiteContent extends Component {
  constructor(props) {
    super(props);

    this.trackScrollPosition = this.trackScrollPosition.bind(this);
  }

  componentDidMount() {
    // only call api when posts empty (refresh state)
    if (this.props.resourcesLib.posts.length === 0) {
      this.props.fetchPosts();
    }

    // set scroll position when user comeback
    window.scrollTo(0, this.props.behavior.previousScrollPosition);
    // update scroll postion
    window.addEventListener('scroll', this.trackScrollPosition);
  }

  componentWillUnmount() {
    // untrack scroll listener when component unmount
    window.removeEventListener('scroll', this.trackScrollPosition);
  }

  trackScrollPosition() {
    this.props.updateScrollPosition(window.scrollY);
  }

  render() {
    const props = this.props.resourcesLib;
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
