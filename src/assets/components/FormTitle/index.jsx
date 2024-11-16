import  { Component } from 'react'
import { Body2, H2 } from '../Typography';


export default class Formtitle extends Component {
  render() {
    const {header, paragraph} = this.props;
    return (
      <div className='form-title'>
        <H2>{header}</H2>
        <Body2>{paragraph}</Body2>
      </div>
    )
  }
}
