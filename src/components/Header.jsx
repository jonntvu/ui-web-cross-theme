import React from 'react';

import __html from '../html/Header.js'

class Header extends React.Component {
  render() {
    return <div dangerouslySetInnerHTML={{__html}}/>
  }
}

export default Header
