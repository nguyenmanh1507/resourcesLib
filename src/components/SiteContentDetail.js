import React, { Component } from 'react';
import es6Promise from 'es6-promise';
import fetch from 'isomorphic-fetch';
import { browserHistory } from 'react-router';
import CardDetail from './cards/CardDetail';
import Comments from './comments/Comments';

es6Promise.polyfill();

class SiteContentDetail extends Component {
  constructor() {
    super()
    this.state = {
      data: {},
    }
  }

  componentDidMount() {
    const id = this.props.params.id;
    fetch(`http://localhost:3000/posts/${id}`)
      .then(response => {
        if (response.status >= 400) {
          browserHistory.push('/');
          throw new Error('Bad response from server');
        }

        return response.json();
      })
      .then(data => {
        this.setState({ data });
      });
  }

  render() {
    const data = this.state.data;

    return(
      <div className="row">
        <div className="ui eight wide column">
          <img src={data.thumbnail} className="ui fluid bordered rounded image" alt="Resource Thumbnail" />
          <CardDetail {...data} />
        </div>
        <div className="ui eight wide column">
          <Comments {...data} />
        </div>
      </div>
    );
  }
}

export default SiteContentDetail;
