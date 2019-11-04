import React from "react";
import SecondaryBanner from "../components/SecondaryBanner";
import ProductArea from "../components/ProductArea";
import scriptLoader from 'react-async-script-loader';
class ProductView extends React.Component {
  state = { product: "" };
  constructor() {
    super();
  }
  componentDidMount() {
    fetch(
      "https://yoshini-api.herokuapp.com/products/" +
        this.props.match.params.product
    )
      .then(res => res.json())
      .then(data => {
        this.setState({ product: data });
      })
      .catch(console.log);
  }
  render() {
    return (
      <>
        <SecondaryBanner />

        <ProductArea
          title={this.state.product.title}
          price={this.state.product.price}
          description={this.state.product.description}
          image="s-p1.jpg"
        />
      </>
    );
  }
}

export default scriptLoader("/js/main.js")(ProductView);

