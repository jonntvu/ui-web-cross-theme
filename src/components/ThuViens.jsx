import React from 'react'
import __html from '../html/ThuVien.js'

class ThuVien extends React.Component {
  render() {
    return <div dangerouslySetInnerHTML={{__html}}/>
  }
}

export default ThuVien
