import  { Component } from 'react'
import { Body, H1, H2 } from '../../components/Typography'
import { API_URL } from '../../config/API'
import axios from 'axios'

import NavIcon from '../../components/NavIcon'
import d from '../../images/d.jpg'

import './style.css'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'

export default class Profile extends Component {

  state ={
    name: '',
    email: '',
    isAdmin: false
  }
  
  async componentDidMount() {
    const token = localStorage.getItem("token");

    try{
        const res = await axios.get(`${API_URL}/profile`,{
          headers: {
            Authorization : `Bearer ${token}`
          }
        })
        if(res){ 
          localStorage.setItem("data", JSON.stringify(res.data))
          let data =localStorage.getItem("data");
          data = JSON.parse(data);
          this.setState({name: data.name, email: data.email, isAdmin: data.isAdmin})
          this.props.handleIsAdminChange(res.data.isAdmin);
        
        }
    }catch (error){
      console.log(error)
    }
  }
  render() {
    return (
      <div className='profile-container'>
        <NavIcon/>
        <img src={d} className='profile-img'/>
        <div className='profile-content'>
          <H2>Your name is : {this.state.name}</H2>
          <Body>Your email is: {this.state.email}</Body>
          <Body>{this.state.isAdmin ?
           `Hello ${this.state.name} you are admin and you can see all users`
           :
           `Hello ${this.state.name} you are not admin and you can not see all users`}</Body>
           {this.state.isAdmin ?
           <>
            <H2>You are Authorizes as Admin so if you want to see list of users click down</H2>
            <Link to='/profile/userslist' ><Button buttonName="usersList"/></Link>
           </> 
           : 
           ''}
        </div>
      </div>
    )
  }
}
