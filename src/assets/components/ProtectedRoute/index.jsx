import { Component } from "react";
import Watches from "../../pages/Watches";
import { Navigate} from "react-router-dom";

export default class ProtectedRoute extends Component {
  render() {
    const { isAuthorized, logout } = this.props;
    return (
      <div>
        {isAuthorized ?  <Watches logout={logout}/> : <Navigate to='/login'/>}
      </div>
    );
  }
}
