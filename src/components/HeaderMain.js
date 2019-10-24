import React from 'react';
import {Link} from 'react-router-dom';
const HeaderMain = (props) => {
    return ( 
        <>
        {/*<!-- Header Main -->*/}

        <div className="header_main">
            <div className="container">
                <div className="row">

                    {/*<!-- Logo -->*/}
                    <div className="col-lg-2 col-sm-3 col-3 order-1">
                        <div className="logo_container">
                            <div className="logo"><Link to="/" ><img src="yoshiniLogo.png" height="80px" alt=""/></Link></div>
                        </div>
                    </div>

                    {/*<!-- Search -->*/}
                    <div className="col-lg-6 col-12 order-lg-2 order-3 text-lg-left text-right">
                        <div className="header_search">
                            <div className="header_search_content">
                                <div className="header_search_form_container">
                                    <form action="#" className="header_search_form clearfix">
                                        <input type="search" required="required" className="header_search_input" placeholder="Search for products..."></input>
                                        <div className="custom_dropdown">
                                            <div className="custom_dropdown_list">
                                                <span className="custom_dropdown_placeholder clc">All Categories</span>
                                                <i className="fas fa-chevron-down"></i>
                                                <ul className="custom_list clc">
                                                    <li><Link className="clc" to="/">All Categories</Link></li>
                                                    <li><Link className="clc" to="/">Computers</Link></li>
                                                    <li><Link className="clc" to="/">Laptops</Link></li>
                                                    <li><Link className="clc" to="/">Cameras</Link></li>
                                                    <li><Link className="clc" to="/">Hardware</Link></li>
                                                    <li><Link className="clc" to="/">Smartphones</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <button type="submit" className="header_search_button trans_300" value="Submit"><img src="images/search.png" alt="" /></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*<!-- Wishlist -->*/}
                    <div className="col-lg-4 col-9 order-lg-3 order-2 text-lg-left text-right">
                        <div className="wishlist_cart d-flex flex-row align-items-center justify-content-end">
                            <div className="wishlist d-flex flex-row align-items-center justify-content-end">
                                <div className="wishlist_icon"><img src="images/heart.png" alt="" /></div>
                                <div className="wishlist_content">
                                    <div className="wishlist_text"><Link to="/">Wishlist</Link></div>
                                    <div className="wishlist_count">115</div>
                                </div>
                            </div>

                            {/*<!-- Cart -->*/}
                            <div className="cart">
                                <div className="cart_container d-flex flex-row align-items-center justify-content-end">
                                    <div className="cart_icon">
                                        <img src="images/cart.png" alt="" />
                                        <div className="cart_count"><span>10</span></div>
                                    </div>
                                    <div className="cart_content">
                                        <div className="cart_text"><Link to="/cart">Cart</Link></div>
                                        <div className="cart_price">$85</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default HeaderMain;