import React, { Component } from 'react';
import './assets/stylesheets/semantic.css';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';

class App extends Component {
  render() {
    return (
      <div className="ui grid container">
        <SiteHeader />
        {/* <SiteContent /> */}
        {this.props.children}
        <SiteFooter />
      </div>
    );
  }
}

export default App;
