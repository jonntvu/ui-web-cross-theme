import React from 'react'
import __html from '../html/CallToAction.js'

class CallToAction extends React.Component {
  render() {
    return <div dangerouslySetInnerHTML={{__html}}/>
  }
}

export default CallToAction
