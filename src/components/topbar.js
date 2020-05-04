import * as React from "react";
import { Navbar, Nav, FormControl, Form, Button } from "react-bootstrap";
import Popup from "reactjs-popup";
import SignIn from './signin';
import SignUp from './signup';

const TopBar = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#">My App</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/projects">Projects</Nav.Link>
        <Popup modal trigger={<Nav.Link href="#Signin">Login</Nav.Link>}>
        {close => (
          <div>
            <a className="close" onClick={close}>&times;</a>
            <SignIn/>       
          </div>
        )}
        </Popup>
        <Popup modal trigger={<Nav.Link href="#Signup">SignUp</Nav.Link>}>
        {close => (
          <div>
            <a className="close" onClick={close}>&times;</a>
            <SignUp/>       
          </div>
        )}
        </Popup>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-light">Search</Button>
      </Form>
    </Navbar>
  )
}
export default TopBar;