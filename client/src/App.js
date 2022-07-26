import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import  Home  from "./pages/Home";
import React from 'react';
import CreatePost from './pages/CreatePost';


function App() {

  
    return (
      <div className="App">
        <Router>
          <Link to="/createpost">Create A Post</Link>
          <Link to="/">Home Page</Link>
          <Routes>
            <Route path="/"  element = {<Home/>} Exact/>
            <Route path="/createpost"  element = {<CreatePost/>} Exact/>
          </Routes>
        </Router>
      </div>
    );
  }

export default App;
