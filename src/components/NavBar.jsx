import './NavBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <img
          src="/img/Logo-Fespa.png"
          className="d-inline-block align-top"
          alt="fespa"
        />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='colab-asoc'>
            <Nav.Link href="#link">COLABORADORES</Nav.Link>
            <Nav.Link href="#link">ASOCIADOS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
