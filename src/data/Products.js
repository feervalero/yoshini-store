import React from "react";

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getProducts = () => {
      var datas=[];
    fetch("https://yoshini-api.herokuapp.com/products")
      .then(res => res.json())
      .then(data => {
        return data;
      }).catch(console.log);
      
      return datas;
  };
}

export default Products;
