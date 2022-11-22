import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light">
      <Container>
        <Navbar.Brand
          href="#home"
          //   className="px-4 mx-4 "
          style={{
            color: "#b6795f",
            fontSize: "2.2rem",
            fontWeight: "600",
            letterSpacing: "3px",
            fontFamily: "'Crimson Pro', serif",
          }}
        >
          Max
        </Navbar.Brand>
        <Navbar.Brand
          href="#home"
          //   className="px-4 mx-4 "
          style={{
            color: "Black",
            fontSize: "2.2rem",
            fontWeight: "600",
            letterSpacing: "3px",
            fontFamily: "'Crimson Pro', serif",
          }}
        >
          Shop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link
              href="#pricing"
              className="justify-content-space-around px-4 "
              style={{
                color: "#b6795f",
                fontSize: "1rem",
                fontWeight: "600",
              }}
            >
              HOME
            </Nav.Link>
            <NavDropdown
              title="CATEGORIES"
              id="collasible-nav-dropdown"
              style={{
                color: "#b6795f",
                fontSize: "1rem",
                fontWeight: "600",
              }}
            >
              <NavDropdown.Item href="#action/3.1">CART</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">CHECKOUT</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">404</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              href="#features"
              className="justify-content-space-around px-4"
              style={{
                color: "#b6795f",
                fontSize: "1rem",
                fontWeight: "600",
              }}
            >
              PRODUCTS
            </Nav.Link>
            <Nav.Link
              href="#features"
              className="justify-content-space-around px-4"
              style={{
                color: "#b6795f",
                fontSize: "1rem",
                fontWeight: "600",
              }}
            >
              SHOP
            </Nav.Link>
            <Nav.Link
              href="#features"
              className="justify-content-space-around px-4"
              style={{
                color: "#b6795f",
                fontSize: "1rem",
                fontWeight: "600",
              }}
            >
              BLOG
            </Nav.Link>
            <Nav.Link
              href="#features"
              className="justify-content-space-around px-4"
              style={{
                color: "#b6795f",
                fontSize: "1rem",
                fontWeight: "600",
              }}
            >
              ABOUT US
            </Nav.Link>
            <Nav.Link
              href="#features"
              className="justify-content-space-around px-4"
              style={{
                color: "#b6795f",
                fontSize: "1rem",
                fontWeight: "600",
              }}
            >
              CONTACT US
            </Nav.Link>
            <Nav.Link
              href="#features"
              className="justify-content-space-around px-4"
            >
              <i class="bi bi-search"></i>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link
              href="#deets"
              className="px-4"
              style={{ borderRight: "1px solid grey" }}
            >
              <i class="bi bi-cart-fill"></i>
            </Nav.Link>
            <Nav.Link
              eventKey={2}
              href="#memes"
              className="px-4"
              style={{ borderRight: "1px solid grey" }}
            >
              <i class="bi bi-heart-fill "></i>
            </Nav.Link>
            <hr />
            <Nav.Link
              eventKey={2}
              href="#memes"
              className="px-4"
              style={{ borderRight: "1px solid grey" }}
            >
              <i class="bi bi-person-circle"></i>
            </Nav.Link>
            <hr />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
