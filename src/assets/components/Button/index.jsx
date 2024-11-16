import  { Component } from 'react'
import './style.css'

export default class Button extends Component {
  render() {
    const {buttonName, type, className} = this.props
    return (
      <div>
        <button type={type} className={className} >{buttonName}</button>
        
      </div>
    )
  }
}
