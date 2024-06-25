
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const NavBar= () => {
  return (
    <Navbar expand="lg" className="NavBar">
      <Container>
        <Navbar.Brand href="#home">F L O R E C E R</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Nosotros">Nosotros</Nav.Link>
            <Nav.Link href="/Reservacion">Reservación</Nav.Link>
            <Nav.Link href="/Blog">Blog</Nav.Link>
            <NavDropdown  title="Menú" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Platos">Platos</NavDropdown.Item>
              <NavDropdown.Item href="/Postres">
                Postres
              </NavDropdown.Item>
              <NavDropdown.Item href="/Bebidas">Bebidas</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

