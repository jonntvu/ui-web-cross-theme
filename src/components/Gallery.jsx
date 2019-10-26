import React from 'react'
import __html from '../html/Gallery.js'

class Gallery extends React.Component {
  render() {
    return <div dangerouslySetInnerHTML={{__html}}/>
  }
}

export default Gallery
