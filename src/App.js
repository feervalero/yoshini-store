import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Router>
        <Header />
        <Route exact path="/" component={HomePage} />
        <Footer />
      </Router>
    </>
  );
}

export default App;
