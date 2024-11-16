import { Component } from "react";

export default class PasswordStrength extends Component {
  render() {
    const { password } = this.props;
    let strength = "weak";
    let color = "#ff0000";
    let width = "0%";
    if (password.length >= 8) {
      strength = "Weak";
      color = "#ff000";
      width = "20%";
    }
    if (
      password.length > 8 &&
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /[0-9]/.test(password)
    ) {
      strength = "Medium";
      color = "#ff9900";
      width = "40%";
    }
    if (
      password.length > 8 &&
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /[0-9]/.test(password) &&
      /[^A-Za-z0-9]/.test(password)
    ) {
      strength = "Strong";
      color = "#00cc00";
      width = "60%";
    }
    
  
    return (
      <div
        className="password-strength-container"
        style={{
          backgroundColor: color,
          width: width,
          borderRadius: '2em',
          marginBottom: '1em',
          height: '10px', // Adjust height as necessary
          transition: 'width 0.5s ease' // Smooth transition for width change
        }}
      >
        {/* Password Strength = {strength} */}
        {/* <div>{strength}</div> */}
      </div>
    );
  }
}
