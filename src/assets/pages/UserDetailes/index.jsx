import axios from "axios";
import { Component } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../../config/API";



export default class UserDetailes extends Component {
  state = {
    data:{}
  }


  async componentDidMount() {
    let selectedUserID = localStorage.getItem("selectedUserID")
    selectedUserID = parseInt(selectedUserID)
    const token = localStorage.getItem("token")
    try{
      const res = await axios.get(`${API_URL}/:${selectedUserID}`, {
        headers:{
          Authorization: `Bearer ${token}`
        }
      })
      console.log(res)
    }
    catch(error) {
      console.log(error.message)
    }
  }

  render() {
    return (
      <div>
          hii
      </div>
    )
  }
}