import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/rdlogo1.png";
import { useState } from "react";

const Menu = () => {
    const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);
  const closeNavbar = () => setExpanded(false);
    return (
        <section>
             <Navbar expanded={expanded} onToggle={handleToggle} expand="lg" className="nav p-0 m-0" variant="ligth">
      <Container className="m-0">
        <Navbar.Brand as={Link} to={"/"} className="p-0 ">
         
            <img src={Logo} alt="rocio diseños logo" className="logo img-fluid m-1" />
          
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink end className="nav-item nav-link" to={"/"} onClick={closeNavbar}>
              Inicio
            </NavLink>
            <NavLink end className="nav-item nav-link" to={"/servicios"} onClick={closeNavbar}>
              Servicios
            </NavLink>
            <NavLink end className="nav-item nav-link" to={"/contacto"} onClick={closeNavbar}>
              Contacto
            </NavLink>
            <NavLink end className="nav-item nav-link" to={"/nosotros"} onClick={closeNavbar}>
              Nosotros
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </section>
    );
};

export default Menu;