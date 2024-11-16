import { Component } from "react";
import { GiWatch } from "react-icons/gi";
import { FaRegMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";


import twitter from "../../images/twitter.jpg";
import googleIcon from "../../images/googleIcon.jpg";
import inIcon from "../../images/inIcon.jpg";
import hubIcon from "../../images/hubIcon.jpg";
import "./style.css";

export default class NavIcon extends Component {
  render() {
    return (
      <div className="nav-container">
        <GiWatch style={{fontSize: 30}}/>
        <div className="icon-container">
          <img src={twitter} alt="" />
          <img src={googleIcon} alt="" />
          <img src={inIcon} alt="" />
          <img src={hubIcon} alt="" />
        </div>
        <div className="page-theme">
            <FaRegMoon />
            <IoSunnyOutline />
        </div>
      </div>
    );
  }
}
