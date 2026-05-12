import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Layouts/Navbar";
import Home from "./Components/Pages/Home";
import User from "./Components/users/User";
import Alert from "./Components/Layouts/Alert";
import About from "./Components/Pages/About";
import NotFound from "./Components/Pages/NotFound";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
import "./App.css";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar/>
            <div className="container">
              <Alert/>
              <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/user/:login" element={<User />}/>
                <Route path="*" element={<NotFound />}/>
              </Routes>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
