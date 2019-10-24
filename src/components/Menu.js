import React from 'react';
import { Link } from 'react-router-dom';
const Menu = (props) => {
    return ( <>
    {/*<!-- Menu -->*/}

    <div className="page_menu">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                
                                <div className="page_menu_content">
                                    
                                    <div className="page_menu_search">
                                        <form action="#">
                                            <input type="search" required="required" className="page_menu_search_input" placeholder="Search for products..."></input>
                                        </form>
                                    </div>
                                    <ul className="page_menu_nav">
                                        <li className="page_menu_item has-children">
                                            <Link to="/">Language<i className="fa fa-angle-down"></i></Link>
                                            <ul className="page_menu_selection">
                                                <li><Link to="/">English<i className="fa fa-angle-down"></i></Link></li>
                                                <li><Link to="/">Italian<i className="fa fa-angle-down"></i></Link></li>
                                                <li><Link to="/">Spanish<i className="fa fa-angle-down"></i></Link></li>
                                                <li><Link to="/">Japanese<i className="fa fa-angle-down"></i></Link></li>
                                            </ul>
                                        </li>
                                        <li className="page_menu_item has-children">
                                            <Link to="/">Currency<i className="fa fa-angle-down"></i></Link>
                                            <ul className="page_menu_selection">
                                                <li><Link to="/">US Dollar<i className="fa fa-angle-down"></i></Link></li>
                                                <li><Link to="/">EUR Euro<i className="fa fa-angle-down"></i></Link></li>
                                                <li><Link to="/">GBP British Pound<i className="fa fa-angle-down"></i></Link></li>
                                                <li><Link to="/">JPY Japanese Yen<i className="fa fa-angle-down"></i></Link></li>
                                            </ul>
                                        </li>
                                        <li className="page_menu_item">
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li className="page_menu_item has-children">
                                            <Link to="/">Super Deals<i className="fa fa-angle-down"></i></Link>
                                            <ul className="page_menu_selection">
                                                <li><Link to="/">Super Deals<i className="fa fa-angle-down"></i></Link></li>
                                                <li className="page_menu_item has-children">
                                                    <Link to="/">Menu Item<i className="fa fa-angle-down"></i></Link>
                                                    <ul className="page_menu_selection">
                                                        <li><Link to="/">Menu Item<i className="fa fa-angle-down"></i></Link></li>
                                                        <li><Link to="/">Menu Item<i className="fa fa-angle-down"></i></Link></li>
                                                        <li><Link to="/">Menu Item<i className="fa fa-angle-down"></i></Link></li>
                                                        <li><Link to="/">Menu Item<i className="fa fa-angle-down"></i></Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link to="/">Menu Item<i className="fa fa-angle-down"></i></Link></li>
                                                <li><Link to="/">Menu Item<i className="fa fa-angle-down"></i></Link></li>
                                                <li><Link to="/">Menu Item<i className="fa fa-angle-down"></i></Link></li>
                                            </ul>
                                        </li>
                                        <li className="page_menu_item has-children">
                                            <Link to="/">Featured Brands<i className="fa fa-angle-down"></i></Link>
                                            <ul className="page_menu_selection">
                                                <li><Link to="/">Featured Brands<i className="fa fa-angle-down"></i></Link></li>
                                                <li><Link to="/">Menu Item<i className="fa fa-angle-down"></i></Link></li>
                                                <li><Link to="/">Menu Item<i className="fa fa-angle-down"></i></Link></li>
                                                <li><Link to="/">Menu Item<i className="fa fa-angle-down"></i></Link></li>
                                            </ul>
                                        </li>
                                        <li className="page_menu_item has-children">
                                            <Link to="/">Trending Styles<i className="fa fa-angle-down"></i></Link>
                                            <ul className="page_menu_selection">
                                                <li><Link to="/">Trending Styles<i className="fa fa-angle-down"></i></Link></li>
                                                <li><Link to="/">Menu Item<i className="fa fa-angle-down"></i></Link></li>
                                                <li><Link to="/">Menu Item<i className="fa fa-angle-down"></i></Link></li>
                                                <li><Link to="/">Menu Item<i className="fa fa-angle-down"></i></Link></li>
                                            </ul>
                                        </li>
                                        <li className="page_menu_item"><Link to="blog.html">blog<i className="fa fa-angle-down"></i></Link></li>
                                        <li className="page_menu_item"><Link to="contact.html">contact<i className="fa fa-angle-down"></i></Link></li>
                                    </ul>
                                    
                                    <div className="menu_contact">
                                        <div className="menu_contact_item"><div className="menu_contact_icon"><img src="images/phone_white.png" alt=""/></div>+38 068 005 3570</div>
                                        <div className="menu_contact_item"><div className="menu_contact_icon"><img src="images/mail_white.png" alt=""/></div><Link to="mailto:fastsales@gmail.com">fastsales@gmail.com</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

    </> );
}
 
export default Menu;