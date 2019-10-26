import React from 'react'
import __html from '../html/UpcomingEvent.js'

class UpcomingEvent extends React.Component {
  render() {
    return <div dangerouslySetInnerHTML={{__html}}/>
  }
}

export default UpcomingEvent
