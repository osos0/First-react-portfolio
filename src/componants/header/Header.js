import { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import "../header/Header.css";

class Header extends Component {
  render() {
    return (
      <Navbar expand="lg" id="nave">
        <Container>
          <Navbar.Brand href="/">
            {/* <img src={logo} alt=""></img> */}
            <a href="/">V.C.E</a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" col-sm-12 " id="lis">
              <Nav.Link href="#">HOME</Nav.Link>
              <Nav.Link href="#about">ABOUT</Nav.Link>
              <Nav.Link href="#SERVICE">SERVICE</Nav.Link>
              <Nav.Link href="#PORTFOLIO">PORTFOLIO</Nav.Link>
              <Nav.Link href="#Blog">BLOG</Nav.Link>
              <Nav.Link href="#contactUs">CONTACT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;

// return (
//     <Navbar bg="light" expand="lg" id="nave">
//       <Container>
//         <Navbar.Brand href="/">
//           {/* <img src={logo} alt=""></img> */}
//           V.C.E
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className=" col-sm-12 " id="lis">
//             <Nav.Link href="/">Home</Nav.Link>
//             <Nav.Link href="/aboutme">About me</Nav.Link>
//             <Nav.Link href="/explore">Explore Foods</Nav.Link>
//             <Nav.Link href="/">Reviews</Nav.Link>
//             <Nav.Link href="/">FAQ</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
