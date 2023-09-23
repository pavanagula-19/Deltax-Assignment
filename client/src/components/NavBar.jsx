import React from 'react';
import { Navbar, Container, Form, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  const inputHeight = '3rem';
  const inputWidth = '300px';

  const homeTextStyle = {
    color: 'black',
    backgroundColor: 'transparent',
    padding: '0.5rem 1rem',
  };

  const searchIconStyle = {
    fontSize: '1rem', // Adjust the icon size as needed
  };

  return (
    <Navbar bg="secondary" expand="lg" style={{ height: '100px' }}>
      <Container>
        <Button variant="light" className="text-dark">
          <Navbar.Brand href="/" style={homeTextStyle}>
            Home
          </Navbar.Brand>
        </Button>
        <div style={{ width: '1200px' }}></div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form inline className="ml-auto">
            <div className="input-group" style={{ width: inputWidth }}>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                style={{ height: inputHeight }}
              />
              <div className="input-group-append">
                <span className="input-group-text" style={{ height: inputHeight }}>
                  <FontAwesomeIcon icon={faSearch} style={searchIconStyle} />
                </span>
              </div>
            </div>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
