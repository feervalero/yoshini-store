import React from 'react';
import {Link} from 'react-router-dom';
const MainNav = (props) => {
    return ( 
        <>
        {/*<!-- Main Navigation -->*/}

        <nav className="main_nav">
        <div className="container">
            <div className="row">
                <div className="col">
                    
                    <div className="main_nav_content d-flex flex-row">

                        {/*<!-- Categories Menu -->*/}

                        <div className="cat_menu_container">
                            <div className="cat_menu_title d-flex flex-row align-items-center justify-content-start">
                                <div className="cat_burger"><span></span><span></span><span></span></div>
                                <div className="cat_menu_text">categories</div>
                            </div>

                            <ul className="cat_menu">
                                <li><Link to="/products">Computers & Laptops <i className="fas fa-chevron-right ml-auto"></i></Link></li>
                                <li><Link to="/">Cameras & Photos<i className="fas fa-chevron-right"></i></Link></li>
                                <li className="hassubs">
                                    <Link to="/">Hardware<i className="fas fa-chevron-right"></i></Link>
                                    <ul>
                                        <li className="hassubs">
                                            <Link to="/">Menu Item<i className="fas fa-chevron-right"></i></Link>
                                            <ul>
                                                <li><Link to="/">Menu Item<i className="fas fa-chevron-right"></i></Link></li>
                                                <li><Link to="/">Menu Item<i className="fas fa-chevron-right"></i></Link></li>
                                                <li><Link to="/">Menu Item<i className="fas fa-chevron-right"></i></Link></li>
                                                <li><Link to="/">Menu Item<i className="fas fa-chevron-right"></i></Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to="/">Menu Item<i className="fas fa-chevron-right"></i></Link></li>
                                        <li><Link to="/">Menu Item<i className="fas fa-chevron-right"></i></Link></li>
                                        <li><Link to="/">Menu Item<i className="fas fa-chevron-right"></i></Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/">Smartphones & Tablets<i className="fas fa-chevron-right"></i></Link></li>
                                <li><Link to="/">TV & Audio<i className="fas fa-chevron-right"></i></Link></li>
                                <li><Link to="/">Gadgets<i className="fas fa-chevron-right"></i></Link></li>
                                <li><Link to="/">Car Electronics<i className="fas fa-chevron-right"></i></Link></li>
                                <li><Link to="/">Video Games & Consoles<i className="fas fa-chevron-right"></i></Link></li>
                                <li><Link to="/">Accessories<i className="fas fa-chevron-right"></i></Link></li>
                            </ul>
                        </div>

                        {/*<!-- Main Nav Menu -->*/}

                        <div className="main_nav_menu ml-auto">
                            <ul className="standard_dropdown main_nav_dropdown">
                                <li><Link to="/">Home<i className="fas fa-chevron-down"></i></Link></li>
                                <li className="hassubs">
                                    <Link to="/">Super Deals<i className="fas fa-chevron-down"></i></Link>
                                    <ul>
                                        <li>
                                            <Link to="/">Menu Item<i className="fas fa-chevron-down"></i></Link>
                                            <ul>
                                                <li><Link to="/">Menu Item<i className="fas fa-chevron-down"></i></Link></li>
                                                <li><Link to="/">Menu Item<i className="fas fa-chevron-down"></i></Link></li>
                                                <li><Link to="/">Menu Item<i className="fas fa-chevron-down"></i></Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to="/">Menu Item<i className="fas fa-chevron-down"></i></Link></li>
                                        <li><Link to="/">Menu Item<i className="fas fa-chevron-down"></i></Link></li>
                                        <li><Link to="/">Menu Item<i className="fas fa-chevron-down"></i></Link></li>
                                    </ul>
                                </li>
                                <li className="hassubs">
                                    <Link to="/">Featured Brands<i className="fas fa-chevron-down"></i></Link>
                                    <ul>
                                        <li>
                                            <Link to="/">Menu Item<i className="fas fa-chevron-down"></i></Link>
                                            <ul>
                                                <li><Link to="/">Menu Item<i className="fas fa-chevron-down"></i></Link></li>
                                                <li><Link to="/">Menu Item<i className="fas fa-chevron-down"></i></Link></li>
                                                <li><Link to="/">Menu Item<i className="fas fa-chevron-down"></i></Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to="/">Menu Item<i className="fas fa-chevron-down"></i></Link></li>
                                        <li><Link to="/">Menu Item<i className="fas fa-chevron-down"></i></Link></li>
                                        <li><Link to="/">Menu Item<i className="fas fa-chevron-down"></i></Link></li>
                                    </ul>
                                </li>
                                <li className="hassubs">
                                    <Link to="/">Pages<i className="fas fa-chevron-down"></i></Link>
                                    <ul>
                                        <li><Link to="/">Shop<i className="fas fa-chevron-down"></i></Link></li>
                                        <li><Link to="/">Product<i className="fas fa-chevron-down"></i></Link></li>
                                        <li><Link to="/product">Product</Link></li>
                                        <li><Link to="/">Blog Post<i className="fas fa-chevron-down"></i></Link></li>
                                        <li><Link to="/">Regular Post<i className="fas fa-chevron-down"></i></Link></li>
                                        <li><Link to="/">Cart<i className="fas fa-chevron-down"></i></Link></li>
                                        <li><Link to="/">Contact<i className="fas fa-chevron-down"></i></Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/">Blog<i className="fas fa-chevron-down"></i></Link></li>
                                <li><Link to="/">Contact<i className="fas fa-chevron-down"></i></Link></li>
                            </ul>
                        </div>

                        {/*<!-- Menu Trigger -->*/}

                        <div className="menu_trigger_container ml-auto">
                            <div className="menu_trigger d-flex flex-row align-items-center justify-content-end">
                                <div className="menu_burger">
                                    <div className="menu_trigger_text">menu</div>
                                    <div className="cat_burger menu_burger_inner"><span></span><span></span><span></span></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </nav>
    </>
     );
}
 
export default MainNav;