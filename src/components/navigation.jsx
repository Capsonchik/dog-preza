import {Nav, Navbar} from "rsuite";

export const Navigation = () => {
  return (
    <div>
      <Navbar>
        <Navbar.Brand href="#">RSUITE</Navbar.Brand>
        <Nav>
          <Nav.Item eventKey="1">Home</Nav.Item>
          <Nav.Item eventKey="2">News</Nav.Item>
          <Nav.Item eventKey="3">Products</Nav.Item>
          <Nav.Menu title="About">
            <Nav.Item eventKey="4">Company</Nav.Item>
            <Nav.Item eventKey="5">Team</Nav.Item>
            <Nav.Item eventKey="6">Contact</Nav.Item>
          </Nav.Menu>
        </Nav>
      </Navbar>
    </div>
  );
};