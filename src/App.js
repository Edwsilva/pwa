import logo from "./logo.svg";
import "./App.css";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";

import { Navbar, Nav, Container } from "react-bootstrap";

import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loading from "./components/Loading";
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Users from "../src/pages/Users";
// const Home = lazy(() => import("./pages/Home"));
// const About = lazy(() => import("./pages/About"));
// const Users = lazy(() => import("./pages/Users"));

function App() {
  return (
    <Router>
      {/* <Suspense fallback={<Loading />}> */}
      <Navbar bg="primary" variant="dark">
        <Container>
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav className="me-auto">
            <Nav.Link as="span">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link as="span">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </Nav.Link>
            <Nav.Link as="span">
              <Link to="/users" className="nav-link">
                Users
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
      </Routes>
      {/* </Suspense> */}
    </Router>
  );
}

export default App;
