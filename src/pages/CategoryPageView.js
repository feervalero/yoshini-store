import React from "react";
import SecondaryBanner from '../components/SecondaryBanner';
import {Link} from 'react-router-dom';
import SingleProduct from "../components/SingleProduct";
import { runInThisContext } from "vm";
import SidebarCategories from "../components/SidebarCategories";
class CategoryPageView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <SecondaryBanner title="Category Shop Page" />
        <div className="container">
		<div className="row">
			<div className="col-xl-3 col-lg-4 col-md-5">
				<SidebarCategories {...this.props} />
				<div className="sidebar-filter mt-50">
					<div className="top-filter-head">Product Filters</div>
					<div className="common-filter">
						<div className="head">Brands</div>
						<form action="#">
							<ul>
								<li className="filter-list"><input className="pixel-radio" type="radio" id="apple" name="brand"></input><label htmlFor="apple">Apple<span>(29)</span></label></li>
								<li className="filter-list"><input className="pixel-radio" type="radio" id="asus" name="brand"></input><label htmlFor="asus">Asus<span>(29)</span></label></li>
								<li className="filter-list"><input className="pixel-radio" type="radio" id="gionee" name="brand"></input><label htmlFor="gionee">Gionee<span>(19)</span></label></li>
								<li className="filter-list"><input className="pixel-radio" type="radio" id="micromax" name="brand"></input><label htmlFor="micromax">Micromax<span>(19)</span></label></li>
								<li className="filter-list"><input className="pixel-radio" type="radio" id="samsung" name="brand"></input><label htmlFor="samsung">Samsung<span>(19)</span></label></li>
							</ul>
						</form>
					</div>
					<div className="common-filter">
						<div className="head">Color</div>
						<form action="#">
							<ul>
								<li className="filter-list"><input className="pixel-radio" type="radio" id="black" name="color"></input><label htmlFor="black">Black<span>(29)</span></label></li>
								<li className="filter-list"><input className="pixel-radio" type="radio" id="balckleather" name="color"></input><label htmlFor="balckleather">Black
										Leather<span>(29)</span></label></li>
								<li className="filter-list"><input className="pixel-radio" type="radio" id="blackred" name="color"></input><label htmlFor="blackred">Black
										with red<span>(19)</span></label></li>
								<li className="filter-list"><input className="pixel-radio" type="radio" id="gold" name="color"></input><label htmlFor="gold">Gold<span>(19)</span></label></li>
								<li className="filter-list"><input className="pixel-radio" type="radio" id="spacegrey" name="color"></input><label htmlFor="spacegrey">Spacegrey<span>(19)</span></label></li>
							</ul>
						</form>
					</div>
					<div className="common-filter">
						<div className="head">Price</div>
						<div className="price-range-area">
							<div id="price-range"></div>
							<div className="value-wrapper d-flex">
								<div className="price">Price:</div>
								<span>$</span>
								<div id="lower-value"></div>
								<div className="to">to</div>
								<span>$</span>
								<div id="upper-value"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="col-xl-9 col-lg-8 col-md-7">
				{/*<!-- Start Filter Bar -->*/}
				<div className="filter-bar d-flex flex-wrap align-items-center">
					<div className="sorting">
						<select>
							<option value="1">Default sorting</option>
							<option value="1">Default sorting</option>
							<option value="1">Default sorting</option>
						</select>
					</div>
					<div className="sorting mr-auto">
						<select>
							<option value="1">Show 12</option>
							<option value="1">Show 12</option>
							<option value="1">Show 12</option>
						</select>
					</div>
					<div className="pagination">
						<a href="#" className="prev-arrow"><i className="fa fa-long-arrow-left" aria-hidden="true"></i></a>
						<a href="#" className="active">1</a>
						<a href="#">2</a>
						<a href="#">3</a>
						<a href="#" className="dot-dot"><i className="fa fa-ellipsis-h" aria-hidden="true"></i></a>
						<a href="#">6</a>
						<a href="#" className="next-arrow"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
					</div>
				</div>
				{/*<!-- End Filter Bar -->*/}
				{/*<!-- Start Best Seller -->*/}
				<section className="lattest-product-area pb-40 category-list">
					<div className="row">
                    {this.props.products.map(product=>(
						<SingleProduct _id={product._id} title={product.title} fixed_price={product.fixed_price} {...this.props} key={product._id}/>
                    ))}

						
					</div>
				</section>
				{/*<!-- End Best Seller -->*/}
				{/*<!-- Start Filter Bar -->*/}
				<div className="filter-bar d-flex flex-wrap align-items-center">
					<div className="sorting mr-auto">
						<select>
							<option value="1">Show 12</option>
							<option value="1">Show 12</option>
							<option value="1">Show 12</option>
						</select>
					</div>
					<div className="pagination">
						<a href="#" className="prev-arrow"><i className="fa fa-long-arrow-left" aria-hidden="true"></i></a>
						<a href="#" className="active">1</a>
						<a href="#">2</a>
						<a href="#">3</a>
						<a href="#" className="dot-dot"><i className="fa fa-ellipsis-h" aria-hidden="true"></i></a>
						<a href="#">6</a>
						<a href="#" className="next-arrow"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
					</div>
				</div>
				{/*<!-- End Filter Bar -->*/}
			</div>
		</div>
	</div>
      
      </>
    );
  }
}

export default CategoryPageView;
