import { Component } from "react";
import { Link } from "react-router-dom";



import d from '../../images/d.jpg'
import './style.css';




export default class Watches extends Component {
 
 
  render() {
    const { logout } = this.props;
    return (
        <div className="page-content">
          <div className="nav">
            <button onClick={logout} className="log-out-button">Logout</button>
            <Link to='/dashboard/profile'><img src={d} className="profile-img"/></Link>
          </div>
          <div className="watches-page">Watches page</div> 
        </div>
    
    );
  }
}
