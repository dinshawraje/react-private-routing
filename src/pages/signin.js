import React from "react";
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { userActions } from '../actions';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.props.logout();
    this.state = {
      email: '',
      password: '',
      submitted: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
      e.preventDefault();
      this.setState({ submitted: true });
      const { email, password } = this.state;
      if (email && password) {
          this.props.login(email, password);
      }
  }
  

  render() {
    const { loggingIn } = this.props;
    const { email, password, submitted } = this.state;
    
    return (
      <div className="col-md-6 col-md-offset-3">
        <h2>Login</h2>
        <form name="form" onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" name='email'
              value={email} onChange={this.handleChange} />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name='password'
              value={password} onChange={this.handleChange} />
          </Form.Group>
          <div className="form-group">
              <button className="btn btn-primary">Login</button>
              {loggingIn}
              <Link to="/register" className="btn btn-link">Register</Link>
          </div>
        </form>
      </div>
    )
  }
}

function mapState(state) {
  const { loggingIn } = state.authentication;
  return { loggingIn };
}

const actionCreators = {
  login: userActions.login,
  logout: userActions.logout
};

const connectedSignIn = connect(mapState, actionCreators)(SignIn);
export { connectedSignIn as SignIn };
