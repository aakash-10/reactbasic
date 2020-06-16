import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import './App.css';
import { Nav, Navbar, NavItem,Form,FormControl,Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import addstudent from './components/addstudent.js';
import getstudent from './components/getstudent.js';

function App() {
  return (
  <Router>
      <>
        <nav className="nav" id="nav">
          <div className="nav-center">
            <div className="nav=header">
              <img src={logo} className="nav-logo" alt="logo" style={{ position: "relative" }}></img>
              {/* <h3 className="nav-logo" style={{ color:"#149AD1",position:"relative"}}>Lishi</h3> */}
              <button className="nav-btn" id="nav-btn" style={{ position: "absolute", right: "27px" }}>
                {/* <i className="fas fa-bars"></i> */}
              
              </button>

            </div>
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/add">add</Link></li>
           
           
            </ul>

          </div>
        </nav>

        
        <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/students"]} component={getstudent} />
          <Route exact path="/add" component={addstudent} />
          {/* <Route path="/tutorials/:id" component={Tutorial} /> */}
        </Switch>
      </div>
     
      </>

  </Router>

  );
}

export default App;
