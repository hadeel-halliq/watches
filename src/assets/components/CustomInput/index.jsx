import { Component } from "react";
import { Field, ErrorMessage } from "formik";

import "./style.css";

export default class CustomInput extends Component {
  render() {
    const { label,className, ...props } = this.props;
    return (
     <>
      {className ? 
      <div className={className}>
        <div>
          <Field {...props} className="form-field" />
          <label>{label}</label>
        </div> 
        <ErrorMessage
          name={props.name}
          component="div"
          className="error-message"
        />
      </div> :
       <>
        <label>{label}</label>
        <Field {...props} className="form-field" />
        <ErrorMessage
          name={props.name}
          component="div"
          className="error-message"
        />
       </>}
     </>
    );
  }
}
