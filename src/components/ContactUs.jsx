import React from 'react'
import __html from '../html/Contact.js'

class Contact extends React.Component {
  render() {
    return <div dangerouslySetInnerHTML={{__html}}/>
  }
}

export default Contact
