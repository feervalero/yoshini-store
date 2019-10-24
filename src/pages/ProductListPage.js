import React from 'react';
import {Link} from 'react-router-dom';


class ProductListPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <>
            <div className="shop">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">

                            <div className="shop_sidebar">
                                <div className="sidebar_section">
                                    <div className="sidebar_title">Categories</div>
                                    <ul className="sidebar_categories">
                                        <li><Link to="/">Computers & Laptops</Link></li>
                                        <li><Link to="/">Cameras & Photos</Link></li>
                                        <li><Link to="/">Hardware</Link></li>
                                        <li><Link to="/">Smartphones & Tablets</Link></li>
                                        <li><Link to="/">TV & Audio</Link></li>
                                        <li><Link to="/">Gadgets</Link></li>
                                        <li><Link to="/">Car Electronics</Link></li>
                                        <li><Link to="/">Video Games & Consoles</Link></li>
                                        <li><Link to="/">Accessories</Link></li>
                                    </ul>
                                </div>
                                <div className="sidebar_section filter_by_section">
                                    <div className="sidebar_title">Filter By</div>
                                    <div className="sidebar_subtitle">Price</div>
                                    <div className="filter_price">
                                        <div id="slider-range" className="slider_range"></div>
                                        <p>Range: </p>
                                        <p><input type="text" id="amount" className="amount" readOnly style={{border:"0",fontWeight:"bold"}}></input></p>
                                    </div>
                                </div>
                                <div className="sidebar_section">
                                    <div className="sidebar_subtitle color_subtitle">Color</div>
                                    <ul className="colors_list">
                                        <li className="color"><Link to="/" style={{background:"#b19c83"}}></Link></li>
                                        <li className="color"><Link to="/" style={{background:"#000000"}}></Link></li>
                                        <li className="color"><Link to="/" style={{background:"#999999"}}></Link></li>
                                        <li className="color"><Link to="/" style={{background:"#0e8ce4"}}></Link></li>
                                        <li className="color"><Link to="/" style={{background:"#df3b3b"}}></Link></li>
                                        <li className="color"><Link to="/" style={{background:"#ffffff", border:"solid 1px #e1e1e1"}}></Link></li>
                                    </ul>
                                </div>
                                <div className="sidebar_section">
                                    <div className="sidebar_subtitle brands_subtitle">Brands</div>
                                    <ul className="brands_list">
                                        <li className="brand"><Link to="/">Apple</Link></li>
                                        <li className="brand"><Link to="/">Beoplay</Link></li>
                                        <li className="brand"><Link to="/">Google</Link></li>
                                        <li className="brand"><Link to="/">Meizu</Link></li>
                                        <li className="brand"><Link to="/">OnePlus</Link></li>
                                        <li className="brand"><Link to="/">Samsung</Link></li>
                                        <li className="brand"><Link to="/">Sony</Link></li>
                                        <li className="brand"><Link to="/">Xiaomi</Link></li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-9">
                            

                            <div className="shop_content">
                                <div className="shop_bar clearfix">
                                    <div className="shop_product_count"><span>186</span> products found</div>
                                    <div className="shop_sorting">
                                        <span>Sort by:</span>
                                        <ul>
                                            <li>
                                                <span className="sorting_text">highest rated<i className="fas fa-chevron-down"></i></span>
                                                <ul>
                                                    <li className="shop_sorting_button" data-isotope-option='{ "sortBy": "original-order" }'>highest rated</li>
                                                    <li className="shop_sorting_button" data-isotope-option='{ "sortBy": "name" }'>name</li>
                                                    <li className="shop_sorting_button"data-isotope-option='{ "sortBy": "price" }'>price</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="product_grid">
                                    <div className="product_grid_border"></div>

                                    <div className="product_item is_new">
                                        <div className="product_border"></div>
                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_5.jpg" alt="" /></div>
                                        <div className="product_content">
                                            <div className="product_price">$225</div>
                                            <div className="product_name"><div><Link to="/" tabIndex="0">Philips BT6900A</Link></div></div>
                                        </div>
                                        <div className="product_fav"><i className="fas fa-heart"></i></div>
                                        <ul className="product_marks">
                                            <li className="product_mark product_discount">-25%</li>
                                            <li className="product_mark product_new">new</li>
                                        </ul>
                                    </div>

                                    <div className="product_item discount">
                                        <div className="product_border"></div>
                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_1.png" alt="" /></div>
                                        <div className="product_content">
                                            <div className="product_price">$225<span>$300</span></div>
                                            <div className="product_name"><div><Link to="/" tabIndex="0">Huawei MediaPad...</Link></div></div>
                                        </div>
                                        <div className="product_fav"><i className="fas fa-heart"></i></div>
                                        <ul className="product_marks">
                                            <li className="product_mark product_discount">-25%</li>
                                            <li className="product_mark product_new">new</li>
                                        </ul>
                                    </div>

                                    <div className="product_item">
                                        <div className="product_border"></div>
                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_2.png" alt="" /></div>
                                        <div className="product_content">
                                            <div className="product_price">$379</div>
                                            <div className="product_name"><div><Link to="/" tabIndex="0">Apple iPod shuffle</Link></div></div>
                                        </div>
                                        <div className="product_fav"><i className="fas fa-heart"></i></div>
                                        <ul className="product_marks">
                                            <li className="product_mark product_discount">-25%</li>
                                            <li className="product_mark product_new">new</li>
                                        </ul>
                                    </div>

                                    <div className="product_item">
                                        <div className="product_border"></div>
                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_3.png" alt="" /></div>
                                        <div className="product_content">
                                            <div className="product_price">$225</div>
                                            <div className="product_name"><div><Link to="/" tabIndex="0">Sony MDRZX310W</Link></div></div>
                                        </div>
                                        <div className="product_fav"><i className="fas fa-heart"></i></div>
                                        <ul className="product_marks">
                                            <li className="product_mark product_discount">-25%</li>
                                            <li className="product_mark product_new">new</li>
                                        </ul>
                                    </div>

                                    <div className="product_item is_new">
                                        <div className="product_border"></div>
                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_4.png" alt="" /></div>
                                        <div className="product_content">
                                            <div className="product_price">$379</div>
                                            <div className="product_name"><div><Link to="/" tabIndex="0">LUNA Smartphone</Link></div></div>
                                        </div>
                                        <div className="product_fav"><i className="fas fa-heart"></i></div>
                                        <ul className="product_marks">
                                            <li className="product_mark product_discount">-25%</li>
                                            <li className="product_mark product_new">new</li>
                                        </ul>
                                    </div>

                                    <div className="product_item is_new">
                                        <div className="product_border"></div>
                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/shop_1.jpg" alt="" /></div>
                                        <div className="product_content">
                                            <div className="product_price">$379</div>
                                            <div className="product_name"><div><Link to="/" tabIndex="0">Canon IXUS 175...</Link></div></div>
                                        </div>
                                        <div className="product_fav"><i className="fas fa-heart"></i></div>
                                        <ul className="product_marks">
                                            <li className="product_mark product_discount">-25%</li>
                                            <li className="product_mark product_new">new</li>
                                        </ul>
                                    </div>

                                    <div className="product_item">
                                        <div className="product_border"></div>
                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_5.png" alt="" /></div>
                                        <div className="product_content">
                                            <div className="product_price">$379<span>$300</span></div>
                                            <div className="product_name"><div><Link to="/" tabIndex="0">Canon STM Kit...</Link></div></div>
                                        </div>
                                        <div className="product_fav"><i className="fas fa-heart"></i></div>
                                        <ul className="product_marks">
                                            <li className="product_mark product_discount">-25%</li>
                                            <li className="product_mark product_new">new</li>
                                        </ul>
                                    </div>

                                    <div className="product_item">
                                        <div className="product_border"></div>
                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_6.png" alt="" /></div>
                                        <div className="product_content">
                                            <div className="product_price">$225<span>$300</span></div>
                                            <div className="product_name"><div><Link to="/" tabIndex="0">Samsung J330F</Link></div></div>
                                        </div>
                                        <div className="product_fav"><i className="fas fa-heart"></i></div>
                                        <ul className="product_marks">
                                            <li className="product_mark product_discount">-25%</li>
                                            <li className="product_mark product_new">new</li>
                                        </ul>
                                    </div>

                                    <div className="product_item">
                                        <div className="product_border"></div>
                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_7.png" alt="" /></div>
                                        <div className="product_content">
                                            <div className="product_price">$225</div>
                                            <div className="product_name"><div><Link to="/" tabIndex="0">Lenovo IdeaPad</Link></div></div>
                                        </div>
                                        <div className="product_fav"><i className="fas fa-heart"></i></div>
                                        <ul className="product_marks">
                                            <li className="product_mark product_discount">-25%</li>
                                            <li className="product_mark product_new">new</li>
                                        </ul>
                                    </div>

                                    <div className="product_item">
                                        <div className="product_border"></div>
                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_8.png" alt="" /></div>
                                        <div className="product_content">
                                            <div className="product_price">$379</div>
                                            <div className="product_name"><div><Link to="/" tabIndex="0">Digitus EDNET...</Link></div></div>
                                        </div>
                                        <div className="product_fav"><i className="fas fa-heart"></i></div>
                                        <ul className="product_marks">
                                            <li className="product_mark product_discount">-25%</li>
                                            <li className="product_mark product_new">new</li>
                                        </ul>
                                    </div>

                                    <div className="product_item is_new">
                                        <div className="product_border"></div>
                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_1.jpg" alt="" /></div>
                                        <div className="product_content">
                                            <div className="product_price">$225</div>
                                            <div className="product_name"><div><Link to="/" tabIndex="0">Astro M2 Black</Link></div></div>
                                        </div>
                                        <div className="product_fav"><i className="fas fa-heart"></i></div>
                                        <ul className="product_marks">
                                            <li className="product_mark product_discount">-25%</li>
                                            <li className="product_mark product_new">new</li>
                                        </ul>
                                    </div>

                                    <div className="product_item is_new">
                                        <div className="product_border"></div>
                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_2.jpg" alt="" /></div>
                                        <div className="product_content">
                                            <div className="product_price">$225</div>
                                            <div className="product_name"><div><Link to="/" tabIndex="0">Transcend T.Sonic</Link></div></div>
                                        </div>
                                        <div className="product_fav"><i className="fas fa-heart"></i></div>
                                        <ul className="product_marks">
                                            <li className="product_mark product_discount">-25%</li>
                                            <li className="product_mark product_new">new</li>
                                        </ul>
                                    </div>

                                    <div className="product_item is_new">
                                        <div className="product_border"></div>
                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_3.jpg" alt="" /></div>
                                        <div className="product_content">
                                            <div className="product_price">$225</div>
                                            <div className="product_name"><div><Link to="/" tabIndex="0">Xiaomi Band 2...</Link></div></div>
                                        </div>
                                        <div className="product_fav"><i className="fas fa-heart"></i></div>
                                        <ul className="product_marks">
                                            <li className="product_mark product_discount">-25%</li>
                                            <li className="product_mark product_new">new</li>
                                        </ul>
                                    </div>

                                    <div className="product_item is_new">
                                        <div className="product_border"></div>
                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_4.jpg" alt="" /></div>
                                        <div className="product_content">
                                            <div className="product_price">$379</div>
                                            <div className="product_name"><div><Link to="/" tabIndex="0">Rapoo T8 White</Link></div></div>
                                        </div>
                                        <div className="product_fav"><i className="fas fa-heart"></i></div>
                                        <ul className="product_marks">
                                            <li className="product_mark product_discount">-25%</li>
                                            <li className="product_mark product_new">new</li>
                                        </ul>
                                    </div>

                                    <div className="product_item discount">
                                        <div className="product_border"></div>
                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_1.png" alt="" /></div>
                                        <div className="product_content">
                                            <div className="product_price">$225<span>$300</span></div>
                                            <div className="product_name"><div><Link to="/" tabIndex="0">Huawei MediaPad...</Link></div></div>
                                        </div>
                                        <div className="product_fav"><i className="fas fa-heart"></i></div>
                                        <ul className="product_marks">
                                            <li className="product_mark product_discount">-25%</li>
                                            <li className="product_mark product_new">new</li>
                                        </ul>
                                    </div>

                                    <div className="product_item is_new">
                                        <div className="product_border"></div>
                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_6.jpg" alt="" /></div>
                                        <div className="product_content">
                                            <div className="product_price">$379</div>
                                            <div className="product_name"><div><Link to="/" tabIndex="0">Nokia 3310 (2017)</Link></div></div>
                                        </div>
                                        <div className="product_fav"><i className="fas fa-heart"></i></div>
                                        <ul className="product_marks">
                                            <li className="product_mark product_discount">-25%</li>
                                            <li className="product_mark product_new">new</li>
                                        </ul>
                                    </div>

                                    <div className="product_item is_new">
                                        <div className="product_border"></div>
                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_7.jpg" alt="" /></div>
                                        <div className="product_content">
                                            <div className="product_price">$225</div>
                                            <div className="product_name"><div><Link to="/" tabIndex="0">Rapoo 7100p Gray</Link></div></div>
                                        </div>
                                        <div className="product_fav"><i className="fas fa-heart"></i></div>
                                        <ul className="product_marks">
                                            <li className="product_mark product_discount">-25%</li>
                                            <li className="product_mark product_new">new</li>
                                        </ul>
                                    </div>

                                    <div className="product_item is_new">
                                        <div className="product_border"></div>
                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/new_8.jpg" alt="" /></div>
                                        <div className="product_content">
                                            <div className="product_price">$379</div>
                                            <div className="product_name"><div><Link to="/" tabIndex="0">Canon EF</Link></div></div>
                                        </div>
                                        <div className="product_fav"><i className="fas fa-heart"></i></div>
                                        <ul className="product_marks">
                                            <li className="product_mark product_discount">-25%</li>
                                            <li className="product_mark product_new">new</li>
                                        </ul>
                                    </div>

                                    <div className="product_item is_new">
                                        <div className="product_border"></div>
                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/shop_2.jpg" alt="" /></div>
                                        <div className="product_content">
                                            <div className="product_price">$225</div>
                                            <div className="product_name"><div><Link to="/" tabIndex="0">Gembird SPK-103</Link></div></div>
                                        </div>
                                        <div className="product_fav"><i className="fas fa-heart"></i></div>
                                        <ul className="product_marks">
                                            <li className="product_mark product_discount">-25%</li>
                                            <li className="product_mark product_new">new</li>
                                        </ul>
                                    </div>

                                    <div className="product_item is_new">
                                        <div className="product_border"></div>
                                        <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_5.png" alt="" /></div>
                                        <div className="product_content">
                                            <div className="product_price">$379</div>
                                            <div className="product_name"><div><Link to="/" tabIndex="0">Canon STM Kit...</Link></div></div>
                                        </div>
                                        <div className="product_fav"><i className="fas fa-heart"></i></div>
                                        <ul className="product_marks">
                                            <li className="product_mark product_discount">-25%</li>
                                            <li className="product_mark product_new">new</li>
                                        </ul>
                                    </div>

                                </div>


                                <div className="shop_page_nav d-flex flex-row">
                                    <div className="page_prev d-flex flex-column align-items-center justify-content-center"><i className="fas fa-chevron-left"></i></div>
                                    <ul className="page_nav d-flex flex-row">
                                        <li><Link to="/">1</Link></li>
                                        <li><Link to="/">2</Link></li>
                                        <li><Link to="/">3</Link></li>
                                        <li><Link to="/">...</Link></li>
                                        <li><Link to="/">21</Link></li>
                                    </ul>
                                    <div className="page_next d-flex flex-column align-items-center justify-content-center"><i className="fas fa-chevron-right"></i></div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
            
            </>
         );
    }
}
 
export default ProductListPage;