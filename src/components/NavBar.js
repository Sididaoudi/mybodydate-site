import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyNav() {
    return (
        <div className='theNavBar' style={{ top: 0 }}>
            <Navbar collapseOnSelect expand="md" bg="white" variant="dark" className="my-navbar">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Accueil</Nav.Link>
                            <Nav.Link href="/Discover">Découvrir</Nav.Link>
                            <NavDropdown title="Plus" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Langue" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Spanish
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    German
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="/Login">Se connecter</Nav.Link>
                            <Nav.Link href="/Registration">S'inscrire</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="/Jobs">Envie de nous rejoindre ?</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default MyNav;
