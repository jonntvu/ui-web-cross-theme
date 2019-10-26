import React from 'react'
import __html from '../html/Preloader.js'

class Preloader extends React.Component {
  render() {
    return <div dangerouslySetInnerHTML={{__html}}/>
  }
}

export default Preloader
