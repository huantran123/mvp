import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import Monday from '../pages/Monday.jsx';
import Tuesday from '../pages/Tuesday.jsx';
import Wednesday from '../pages/Wednesday.jsx';
import Thursday from '../pages/Thursday.jsx';
import Friday from '../pages/Friday.jsx';
import Saturday from '../pages/Saturday.jsx';
import Sunday from '../pages/Sunday.jsx';


function NavbarComponent() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" style={{position: "sticky"}} fixed="top">
        <Container>
          <Navbar.Brand as={Link} to={"/"}>Workout Tracklist</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/workout-day/monday">Mon</Nav.Link>
            <Nav.Link as={Link} to={"/workout-day/tuesday"}>Tue</Nav.Link>
            <Nav.Link as={Link} to={"/workout-day/wednesday"}>Wed</Nav.Link>
            <Nav.Link as={Link} to={"/workout-day/thursday"}>Thu</Nav.Link>
            <Nav.Link as={Link} to={"/workout-day/friday"}>Fri</Nav.Link>
            <Nav.Link as={Link} to={"/workout-day/saturday"}>Sat</Nav.Link>
            <Nav.Link as={Link} to={"/workout-day/sunday"}>Sun</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/workout-day/monday" element={<Monday/>}></Route>
        <Route exact path="/workout-day/tuesday" element={<Tuesday/>}></Route>
        <Route exact path="/workout-day/wednesday" element={<Wednesday/>}></Route>
        <Route exact path="/workout-day/thursday" element={<Thursday/>}></Route>
        <Route exact path="/workout-day/friday" element={<Friday/>}></Route>
        <Route exact path="/workout-day/saturday" element={<Saturday/>}></Route>
        <Route exact path="/workout-day/sunday" element={<Sunday/>}></Route>
      </Routes>
    </Router>

  );
}

export default NavbarComponent;