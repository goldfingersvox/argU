import React, { Component } from 'react'
import './Login.css'

//import API from "../../utils/API"
 class Login extends Component {
     
  render() {
    return (
      <div>
        <a  href="http://localhost:8080/auth/facebook" className="btn btn-lg btn-block btn-primary facebook">Login with Facebook</a>
        <a  href="http://localhost:8080/auth/twitter" className="btn btn-lg btn-block btn-primary twitter">Login with Twitter</a>
      </div>
    )
  }
}




export default Login