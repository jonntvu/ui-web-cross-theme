import React from 'react'
import __html from '../html/BanNganh.js'

class BanNganh extends React.Component {
  render() {
    return <div dangerouslySetInnerHTML={{__html}}/>
  }
}

export default BanNganh
