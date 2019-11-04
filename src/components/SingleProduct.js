import React from "react";
import {Link} from 'react-router-dom';

const SingleProduct = props => {
    return (
    <>
      {/*<!-- single product -->*/}
      <div className="col-lg-4 col-md-6">
        <div className="single-product">
          <img className="img-fluid" src="http://lorempixel.com/400/400/food" alt="" />
          <div className="product-details">
            <h6>{props.title}</h6>
            <div className="price">
              <h6>{props.price}</h6>
              <h6 className="l-through">{props.fixed_price}</h6>
            </div>
            <div className="prd-bottom">
              <a href="" className="social-info">
                <span className="ti-bag"></span>
                <p className="hover-text">add to bag</p>
              </a>
              <a href="" className="social-info">
                <span className="lnr lnr-heart"></span>
                <p className="hover-text">Wishlist</p>
              </a>
              <a href="" className="social-info">
                <span className="lnr lnr-sync"></span>
                <p className="hover-text">compare</p>
              </a>
              <Link
                to={`${props.match.url}/${props._id}`}
                className="social-info"
              >
                <span className="lnr lnr-move"></span>
                <p className="hover-text">view more</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
