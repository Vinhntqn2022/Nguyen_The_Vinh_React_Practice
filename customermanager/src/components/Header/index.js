import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
  return (
    <>
      <Navbar bg='primary' variant='dark'>
        <Container>
          <Navbar.Brand href='/'>Customer Manager</Navbar.Brand>
          <Nav className='me-auto header__nav'>
            <Nav.Item className='header__navbar-item'>
              <Nav.Link href='/'>Customers</Nav.Link>
            </Nav.Item>
            <Nav.Link href='#features'>Setting</Nav.Link>
          </Nav>
          <Nav className='me-auto header__login'>
            <Nav.Link href='#pricing'>Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className={{ marginButtom: '20px' }}></div>
    </>
  );
};
export default Header;
