import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Horaextra from "./pages/Horaextra";

import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer/Footer";
import "./App.css";





export default class App extends Component {
  render() {
    return (
      <div className="content">
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} exact />
            <Route path="/Horaextra" element={<Horaextra />} exact />
          </Routes>
        </Router>
        <Footer />
        
      </div>
    );
  }
}
