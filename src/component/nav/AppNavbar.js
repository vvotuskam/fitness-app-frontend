import React from 'react';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import RenderOnAuthenticated from "../render/RenderOnAuthenticated";
import KeycloakService from "../../service/KeycloakService";
import {Link, useNavigate} from "react-router-dom";
import RenderOnRole from "../render/RenderOnRole";
import {Roles} from "../../service/Roles";

const AppNavbar = () => {

    const authDropdown = () => {
        return (
            <NavDropdown title="Account" id="basic-nav-dropdown">
                <NavDropdown.Item>
                    <Link key='none' to='/profile' style={{textDecoration: "none"}}>Profile</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={() => {
                    KeycloakService.doLogout()
                }}>
                    Sign out
                </NavDropdown.Item>
            </NavDropdown>
        )
    }

    const anonDropdown = () => {
        return (
            <NavDropdown title="Log in" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() => KeycloakService.doLogin()}>
                    Log in
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => KeycloakService.doRegister()}>
                    Register
                </NavDropdown.Item>
            </NavDropdown>
        )
    }

    return (
        <Navbar bg="primary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand>Fitness</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link key='none' to='/' style={{textDecoration: "none"}}>Home</Link></Nav.Link>
                        <Nav.Link><Link key='applied' to='/applied' style={{textDecoration: "none"}}>Applied</Link></Nav.Link>
                        <Nav.Link><Link key='about' to='/about' style={{textDecoration: "none"}}>About</Link></Nav.Link>
                        <RenderOnRole
                            children={
                                <Nav.Link>
                                    <Link key='none' to='/users' style={{textDecoration: "none"}}>Admin Console</Link>
                                </Nav.Link>
                            }
                            alt={null}
                            role={Roles.ADMIN}
                        />
                    </Nav>
                    <Nav>
                        <RenderOnAuthenticated
                            children={authDropdown()}
                            alt={anonDropdown()}
                        />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default AppNavbar;