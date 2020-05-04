import React, { Component } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: ''
    }
  }
  render() {
    return (
      <div>
        <h2>SignUp Form</h2>
        <Form>
          <Form.Row>
            <Col>
              <Form.Control placeholder="Username" />
            </Col>
            <Col>
              <Form.Control placeholder="Company" />
            </Col>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form.Row>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}
export default SignUp;