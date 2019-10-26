import React from "react";
import Banner from "../components/Banner";
import Features from '../components/Features';
import Category from '../components/Category';
import Product from '../components/Product';
import Deal from '../components/Deal';
import Brand from '../components/Brand';
import Related from "../components/Related";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Banner />
        <Features />
        <Category />
        <Product />
        <Deal />
        <Brand />
        <Related />
      </>
    );
  }
}

export default HomePage;
