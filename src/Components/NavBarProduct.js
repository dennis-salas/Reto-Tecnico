import React from 'react'
import { Container, Navbar, NavbarBrand, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const NavBarProduct = () => {
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <NavbarBrand>
                    <h5>ShoppingShop</h5>
                </NavbarBrand>
                <Nav>
                    <Link to="/" className="nav-link">Inicio</Link>
                    <Link to="/FormProduct" className="nav-link">Nuevo Producto</Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBarProduct