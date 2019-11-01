import React from "react";
import Home from "./Home";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Login from "./Login";
import { Route } from "react-router-dom";

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Header />
        <Route exact path="/admin" component={Home} />
        <Route path="/admin/login" component={Login} />
        <Footer />
      </>
    );
  }
}

export default Admin;
