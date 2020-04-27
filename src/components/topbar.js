import * as React from "react";
import { Navbar, Nav,FormControl, Form, Button } from "react-bootstrap";

const TopBar = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#">PMPA</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/public">Public</Nav.Link>
        <Nav.Link href="/protected">Create Project</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-light">Search</Button>
      </Form>
    </Navbar>
  )
}
export default TopBar;