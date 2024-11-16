import  { Component } from 'react'
import { API_URL } from '../../config/API'
import { H1 } from '../../components/Typography'

import axios from 'axios'

import './style.css'
import { Link } from 'react-router-dom'

export default class UsersList extends Component {
  state = {
    users: []
  }
  async componentDidMount() {
    const token = localStorage.getItem("token")

    try{
      const res = await axios.get(`${API_URL}`,{
        headers:{
          Authorization: `Bearer ${token}`
        }
      });
      this.setState({ users : res.data.users})
      }catch(error) {
        console.log(error.message)
      }
    }

    handleUserClik = (userId) => {
      localStorage.setItem('selectedUserID', userId)
    }

    render() {
      const { users } = this.state;
      return (
        <div>
            <H1>Users List : </H1>
            
              {users.map((user, index) => (
                <>
                  <Link
                   key={index} 
                   to={`/userslist/userdetailes/${user._id}`}
                   onClick={() => this.handleUserClik(user._id)}>  
                    <div  className='users'>
                      <p><strong>Name:</strong>{user.name}</p> 
                      <p><strong>Email:</strong>{user.email}</p>
                      <strong>Admin:</strong> {user.isAdmin ? 'Yes' : 'No'}
                    </div>
                  </Link>
                </>
              ))}
        </div>
    )
  }
}
