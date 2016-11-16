import React from 'react';
import logo from '../logo.svg';

const styles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const SiteFooter = () => (
  <div className="ui center aligned sixteen wide column">
    <div className="ui divider"></div>
    <div>Copyright (c) 2016 NM Creative. All Rights Reserved.</div>
    <div style={styles}>
      Powered by
      <img src={logo} width="54" alt="logo" />
    </div>
  </div>
);

export default SiteFooter;
