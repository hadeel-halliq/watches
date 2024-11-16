import  { Component } from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import SignUp from "./assets/pages/SignUp"
import LogIn from "./assets/pages/LogIn";
import ProtectedRoute from './assets/components/ProtectedRoute';
import Profile from './assets/pages/Profile';
import UsersList from './assets/pages/UsersList';
import UserDetailes from './assets/pages/UserDetailes'

export default class App extends Component {
  state = {
    isAuthorized: false,
    isAdmin: false
  }
  login = () => this.setState({isAuthorized: true})

  componentDidMount() {
    const token = localStorage.getItem("token")
    if(token) this.setState({isAuthorized: true})
  }

  logout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("data")
    localStorage.removeItem("selectedUserID")
    this.setState({isAuthorized: false , isAdmin: false})
  }

  handleIsAdminChange = (isAdmin) => {
    this.setState({isAdmin})
  }


  render() {
    
    return (
      <>
      <Routes>
        <Route index element={<Navigate to='/login'/>}/>
        <Route index element={<Navigate to='/watches'/>}/>
        <Route path='/login' element={this.state.isAuthorized ? <Navigate to='/dashboard'/> : <LogIn login={this.login}/>}/>
        <Route path='/watches' element={this.state.isAuthorized ? <Navigate to='/dashboard'/> : <LogIn login={this.login}/>}/>
        <Route path='/dashboard' element={<ProtectedRoute isAuthorized={this.state.isAuthorized} logout={this.logout}/>}/>
        <Route path='/watches' element={<ProtectedRoute isAuthorized={this.state.isAuthorized} logout={this.logout}/>}/>
        <Route path='/dashboard/profile' element={<Profile handleIsAdminChange={this.handleIsAdminChange} />} />
        <Route path='/watches' element={<Profile handleIsAdminChange={this.handleIsAdminChange} />} />
        <Route path='/profile/userslist' element={this.state.isAdmin ? <UsersList /> : <Navigate to='/dashboard/profile' />} />
        <Route path='/watches' element={this.state.isAdmin ? <UsersList /> : <Navigate to='/dashboard/profile' />} />
        <Route path='/userslist/userdetailes/:id' element={<UserDetailes />}/>
        <Route path='/watches' element={<UserDetailes />}/>
        <Route path='/register' element={<SignUp />}/>
        <Route path='/watches' element={<SignUp />}/>
      </Routes>
      
      </>
    )
  }
}




{/* <Route path='/dashboard' element={<ProtectedRoute isAuthorized={this.state.isAuthorized} logout={this.logout}/>}>
  <Route path='profile' element={<Profile/>}/>
  </Route> */}


