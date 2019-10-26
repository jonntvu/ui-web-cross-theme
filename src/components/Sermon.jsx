import React from 'react'
import __html from '../html/Sermon.js'

class Sermon extends React.Component {
  render() {
    return <div dangerouslySetInnerHTML={{__html}}/>
  }
}

export default Sermon
