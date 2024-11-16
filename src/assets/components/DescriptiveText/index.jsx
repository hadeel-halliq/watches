import  { Component } from 'react'
import { H3 } from '../Typography';
import { CiHeart } from "react-icons/ci";

import './style.css';

export default class DescriptiveText extends Component {
  render() {
    const {text , name, clockImage} = this.props;
    return (
      <div className='text-des'>
        {text}<span>{clockImage}</span>
        <H3>{name}<CiHeart /></H3>
      </div>
    )
  }
}
