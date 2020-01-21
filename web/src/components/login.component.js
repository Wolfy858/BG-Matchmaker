import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Card, Logo, Form, Input, Button } from './authforms.component'
import { login } from '../services/AuthService'


class Login extends Component {


  constructor(props) {
    super(props);

    this.state = {
       email: "",
       password: ""
     }
  };

  handleChange = (event) => {
    console.log(`name: ${event.target.name}. Value: ${event.target.value}`)
    this.setState = ({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <Card>
        <Form>
          <Input type='email' placeholder="email" name='email' value={this.state.email} onChange={this.handleChange}/>
          <Input type='password' placeholder="password" name='password' value={this.state.password} onChange={this.handleChange}/>
          <Button>Sign In</Button>
        </Form>
        <Link to="/signup">Don't have an account?</Link>
      </Card>
    )
  }

}

export default Login;
