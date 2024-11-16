import { Component } from "react";
import { Formik, Form } from "formik";
import { H4 } from "../Typography";
import { API_URL } from "../../config/API";

import * as Yup from "yup";
import axios from "axios";

import CustomInput from "../CustomInput";
import Button from "../Button";

import "./style.css";
import { Link } from "react-router-dom";

export default class LoginForm extends Component {
  state = {
    isLoading: false,
  }
  handleSubmit = async (values, { setSubmitting }) => {
    this.setState({isLoading: true})
    try {
      const response = await axios.post(
        `${API_URL}/login`,
        {
          email: values.email,
          password: values.password
        }
      );
      if(response) {
        localStorage.setItem("token",response.data.token)
        localStorage.setItem("data", JSON.stringify(response.data))
        this.props.login()
      }
      console.log("Response:", response.data);
    } catch (error) {
      console.error("There was an error submitting the form!", error);
    } finally {
      setSubmitting(false);
      this.setState({isLoading: false})
    }
  };

  render() {
    return (
      <div>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email address")
              .required("Email is required"),
            password: Yup.string().required("Password is required"),
          })}
          onSubmit={this.handleSubmit}
        >
          {({ values, handleChange, handleBlur }) => (
            <Form>
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
              {this.state.isLoading ? <Button buttonName="Loading . . ." type="submit" className="login-button"/> : <Button buttonName="Login" type="submit" className="login-button"/>}
              <H4>Dont have an account ?<Link to='/register'><Button buttonName="Register" type="submit" className="register"/></Link> </H4>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}
