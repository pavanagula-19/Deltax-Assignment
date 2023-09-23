import React from 'react';
import { Navbar, Container, Form, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  const inputHeight = '3rem'; // Set the desired height for the input and icon

  return (
    <Navbar bg="light" expand="lg" style={{ height: '100px' }}>
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        {/* Add a spacing element */}
        <div style={{ width: '1200px' }}></div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form inline className="ml-auto">
            <div className="input-group">
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                style={{ height: inputHeight }} // Set the input's height
              />
              <div className="input-group-append">
                <span className="input-group-text" style={{ height: inputHeight }}>
                  <FontAwesomeIcon icon={faSearch} style={{ height: inputHeight }} />
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
