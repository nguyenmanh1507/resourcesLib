import React, { Component } from 'react';
import Card from './cards/Card';

class SiteContent extends Component {
  render() {
    return (
      <div className="row">
        <div className="ui four cards">

          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />

        </div>
      </div>
    );
  }
}

export default SiteContent;
