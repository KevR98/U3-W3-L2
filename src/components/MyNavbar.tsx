import { Navbar, Container, Nav } from 'react-bootstrap';
import { GiRocketFlight } from 'react-icons/gi';

const MyNavbar = () => {
  return (
    <>
      <Navbar expand='lg' className='bg-body-secondary'>
        <Container fluid={true}>
          <Navbar.Brand href='#home'>
            <GiRocketFlight size={50} style={{ marginRight: '10px' }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link href='#home'>Home</Nav.Link>
              <Nav.Link href='#link'>Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
