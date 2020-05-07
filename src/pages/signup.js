import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { userActions } from '../actions';
class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
        user: {
          username: '',
          company: '',
          email: '',
          password: ''
        },
        submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
      const { name, value } = event.target;
      const { user } = this.state;
      this.setState({
          user: {
              ...user,
              [name]: value
          }
      });
  }

  handleSubmit(event) {
      event.preventDefault();

      this.setState({ submitted: true });
      const { user } = this.state;
      if (user.username && user.company && user.email && user.password) {
          this.props.register(user);
      }
  }

  render() {
    const { registering  } = this.props;
    const { user } = this.state;
    return (
      <div className="col-md-6 col-md-offset-3">
        <h2>SignUp Form</h2>
        <form name="form" onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" name='username'
              value={user.username} onChange={this.handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Company</Form.Label>
            <Form.Control type="text" name='company'
              value={user.company} onChange={this.handleChange} />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" name='email'
              value={user.email} onChange={this.handleChange} />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name='password'
              value={user.password} onChange={this.handleChange} />
          </Form.Group>
         
          <div className="form-group">
              <button className="btn btn-primary">Register</button>
              {registering}
              <Link to="/login" className="btn btn-link">Cancel</Link>
          </div>
        </form>
      </div>
    )
  }
}
function mapState(state) {
  const { registering } = state.registration;
  return { registering };
}

const actionCreators = {
  register: userActions.register
}

const connectedSignUp = connect(mapState, actionCreators)(SignUp);
export { connectedSignUp as SignUp };
