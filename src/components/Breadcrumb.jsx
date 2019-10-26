import React from 'react'
import __html from '../html/Breadcrumb.js'

class Breadcrumb extends React.Component {
  render() {
    return <div dangerouslySetInnerHTML={{__html}}/>
  }
}

export default Breadcrumb
