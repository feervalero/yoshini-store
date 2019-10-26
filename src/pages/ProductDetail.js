import React from "react";
import SecondaryBanner from "../components/SecondaryBanner";
import ProductArea from "../components/ProductArea";
import Deal from "../components/Deal";
import Features from "../components/Features";
import ProductDescription from "../components/ProductDescription";
class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (<>
        <SecondaryBanner title="Product details"/>
        <ProductArea />
        <ProductDescription />
        <Features />
        </>
    );
  }
}

export default ProductDetail;
