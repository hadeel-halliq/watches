import { Component } from "react";
import { Formik, Form } from "formik";
import { H4 } from "../Typography";

import * as Yup from "yup";
import axios from "axios";

import CustomInput from "../CustomInput";
import PasswordStrength from "../PasswordStrength";

import "./style.css";
import Button from "../Button";
import { Link } from "react-router-dom";

export default class SignupForm extends Component {
  handleSubmit = async (values, { setSubmitting }) => {
    console.log(values)
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        values
      );
      console.log("Response:", response.data);
    } catch (error) {
      console.error("There was an error submitting the form!", error);
    } finally {
      setSubmitting(false);
    }
  };

  render() {
    return (
      <div>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            repeatPassword: "",
            isAgreed: false,
          }}
          validationSchema={Yup.object({
            name: Yup.string().required("Name is required"),
            email: Yup.string()
              .email("Invalid email address")
              .required("Email is required"),
            password: Yup.string()
              .min(8, "Password must be at least 8 characters")
              .required("Password is required"),
            repeatPassword: Yup.string()
              .oneOf([Yup.ref("password"), null], "Passwords must match")
              .required("Repeat Password is required"),
            isAgreed: Yup.boolean()
              .oneOf([true], "You must accept the terms and conditions") // Validation for checkbox
              .required("You must accept the terms and conditions"),
          })}
          onSubmit={this.handleSubmit}
        >
          {({ values, handleChange, handleBlur }) => (
            <Form>
              <CustomInput
                label="Name:"
                name="name"
                type="text"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <CustomInput
                label="Email:"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <CustomInput
                label="Password:"
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <PasswordStrength password={values.password} />
              <CustomInput
                label="Repeat Password:"
                name="repeatPassword"
                type="password"
                value={values.repeatPassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <CustomInput
                className= "checkbox"
                label="I agree to terms & conditions"
                name="isAgreed"
                type="checkbox"
                checked={values.isAgreed}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {/* <button type="submit">Submit</button> */}
              <Button buttonName="Register Account" type="submit" />
              <H4>Or</H4>
              <Link to='/login'><Button buttonName="Login" type="submit" className="login-button"/></Link>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}
