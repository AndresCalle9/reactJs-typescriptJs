import { Container, Navbar, Nav } from 'react-bootstrap';
import './NavBar.scss';

const NavBar = () => {
  return (
    <Navbar expand='lg' className='nav-bar'>
      <Container>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mx-auto'>
            <Nav.Link href='#home'>
              <i className='bi bi-apple'></i>
            </Nav.Link>
            <Nav.Link href='/'>Tienda</Nav.Link>
            <Nav.Link href='/'>Mac</Nav.Link>
            <Nav.Link href='/'>iPad</Nav.Link>
            <Nav.Link href='/'>iPhone</Nav.Link>
            <Nav.Link href='/'>Watch</Nav.Link>
            <Nav.Link href='/'>Airpods</Nav.Link>
            <Nav.Link href='/'>Tv y Casa</Nav.Link>
            <Nav.Link href='/'>Sólo Apple</Nav.Link>
            <Nav.Link href='/'>Accesorios</Nav.Link>
            <Nav.Link href='/'>Soporte</Nav.Link>
            <Nav.Link href='#home'>
              <i className='bi bi-search'></i>
            </Nav.Link>
            <Nav.Link href='#home'>
              <i className='bi bi-bag'></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
