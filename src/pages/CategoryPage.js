import React from "react";
import SecondaryBanner from "../components/SecondaryBanner";
import Products from "../data/Products";
import {Link,Route,Switch} from 'react-router-dom';
import CategoryPageView from "./CategoryPageView";
import ProductView from "./ProductView";

class CategoryPage extends React.Component {
    state = {products:[]};
    constructor(props) {
    super(props);
    
  }

  componentDidMount = ()=>{
    fetch("https://yoshini-api.herokuapp.com/products")
      .then(res => res.json())
      .then(data => {
        this.setState({products:data})
      }).catch(console.log);
  }

  render() {
    
    return (
      <>
        <Route path={`${this.props.match.url}/:product`}
            render={ (props) => <ProductView {...props} />}/>
        <Route exact path={this.props.match.url}
            render={props => (
                <CategoryPageView products={this.state.products} {...props} key={this.state.products._id}/>
            )}
        />
    </>
        
    );
  }
}

export default CategoryPage;
