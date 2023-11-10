import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./containers/HomePage";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <div className="main-container">
            <div className="content-container">
              <Routes>
                <Route path="/" element={<HomePage />} />
              </Routes>
            </div>
          </div>
        </Router>
      </>
    );
  }
}

export default App;
