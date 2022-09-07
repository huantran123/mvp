import React from 'react';
// import $ from 'jquery';
import { Nav, NavLink, NavMenu } from "./components/NavbarElements";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/index';
import Monday from './pages/monday';
import Tuesday from './pages/tuesday';
import Wednesday from './pages/wednesday';
import Thursday from './pages/thursday';
import Friday from './pages/friday';
import Saturday from './pages/saturday';
import Sunday from './pages/sunday';
import Box from '@material-ui/core/Box';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render() {
    return (
      <Router>
        <Nav>
            <NavMenu>
              <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
                <NavLink to="/">
                  Home
                </NavLink>
                <NavLink to="/workout-day/monday" >
                  Monday
                </NavLink>
                <NavLink to="/workout-day/tuesday" >
                  Tuesday
                </NavLink>
                <NavLink to="/workout-day/wednesday" >
                  Wednesday
                </NavLink>
                <NavLink to="/workout-day/thursday" >
                  Thursday
                </NavLink>
                <NavLink to="/workout-day/friday" >
                  Friday
                </NavLink>
                <NavLink to="/workout-day/saturday" >
                  Saturday
                </NavLink>
                <NavLink to="/workout-day/sunday" >
                  Sunday
                </NavLink>
              </Box>
            </NavMenu>
          </Nav>
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/workout-day/monday' element={<Monday/>} />
            <Route path='/workout-day/tuesday' element={<Tuesday/>} />
            <Route path='/workout-day/wednesday' element={<Wednesday/>} />
            <Route path='/workout-day/thursday' element={<Thursday/>} />
            <Route path='/workout-day/friday' element={<Friday/>} />
            <Route path='/workout-day/saturday' element={<Saturday/>} />
            <Route path='/workout-day/sunday' element={<Sunday/>} />
        </Routes>
      </Router>
    )
  }
}

export default App;