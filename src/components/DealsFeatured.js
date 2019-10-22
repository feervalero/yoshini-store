import React from 'react';
import Deals from '../data/Deals';
import DealsItem from '../components/DealsItem';
import Featured from '../data/Featured';
import SlideItem from './SlideItem';
const DealsFeatured = (props) => {
    return (
        <>
        {/*Products.map(item => <h7>{item.name}</h7>)*/}
            <div className="deals_featured">
                <div className="container">
                    <div className="row">
                        <div className="col d-flex flex-lg-row flex-column align-items-center justify-content-start">
                            
                            {/*<!-- Deals -->*/}

                            <div className="deals">
                                <div className="deals_title">Deals of the Week</div>
                                <div className="deals_slider_container">
                                    
                                    {/*<!-- Deals Slider -->*/}
                                    <div className="owl-carousel owl-theme deals_slider">
                                        
                                        {/*<!-- Deals Item -->*/}
                                        {Deals.map(item => <DealsItem {...item} key={item.id} />)}

                                    </div>

                                </div>

                                <div className="deals_slider_nav_container">
                                    <div className="deals_slider_prev deals_slider_nav"><i className="fas fa-chevron-left ml-auto"></i></div>
                                    <div className="deals_slider_next deals_slider_nav"><i className="fas fa-chevron-right ml-auto"></i></div>
                                </div>
                            </div>
                            
                            {/*<!-- Featured -->*/}
                            <div className="featured">
                                <div className="tabbed_container">
                                    <div className="tabs">
                                        <ul className="clearfix">
                                            <li className="active">Featured</li>
                                            <li>On Sale</li>
                                            <li>Best Rated</li>
                                        </ul>
                                        <div className="tabs_line"><span></span></div>
                                    </div>

                                    {/*<!-- Product Panel -->*/}
                                    <div className="product_panel panel active">
                                        <div className="featured_slider slider">

                                            {/* <SlideItem />*/}

                                            {Featured.map(item => <SlideItem {...item} key={item.id} />)}
                                            
                                            {/*<!-- Slider Item -->*/}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item discount d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_1.png" alt="" /></div>
                                                    <div className="product_content">
                                                        <div className="product_price discount">$225<span>$300</span></div>
                                                        <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background:"#b19c83"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#000000"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#999999"}}></input>
                                                            </div>
                                                            <button className="product_cart_button">Add to Cart</button>
                                                        </div>
                                                    </div>
                                                    <div className="product_fav"><i className="fas fa-heart"></i></div>
                                                    <ul className="product_marks">
                                                        <li className="product_mark product_discount">-25%</li>
                                                        <li className="product_mark product_new">new</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/*<!-- Slider Item -->*/}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_2.png" alt="" /></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$379</div>
                                                        <div className="product_name"><div><a href="product.html">Apple iPod shuffle</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background:"#b19c83"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#000000"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#999999"}}></input>
                                                            </div>
                                                            <button className="product_cart_button active">Add to Cart</button>
                                                        </div>
                                                    </div>
                                                    <div className="product_fav"><i className="fas fa-heart"></i></div>
                                                    <ul className="product_marks">
                                                        <li className="product_mark product_discount"></li>
                                                        <li className="product_mark product_new">new</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/*<!-- Slider Item -->*/}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_3.png" alt="" /></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$379</div>
                                                        <div className="product_name"><div><a href="product.html">Sony MDRZX310W</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background:"#b19c83"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#000000"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#999999"}}></input>
                                                            </div>
                                                            <button className="product_cart_button">Add to Cart</button>
                                                        </div>
                                                    </div>
                                                    <div className="product_fav"><i className="fas fa-heart"></i></div>
                                                    <ul className="product_marks">
                                                        <li className="product_mark product_discount"></li>
                                                        <li className="product_mark product_new">new</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/*<!-- Slider Item -->*/}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item discount d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_4.png" alt="" /></div>
                                                    <div className="product_content">
                                                        <div className="product_price discount">$225<span>$300</span></div>
                                                        <div className="product_name"><div><a href="product.html">LUNA Smartphone</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background:"#b19c83"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#000000"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#999999"}}></input>
                                                            </div>
                                                            <button className="product_cart_button">Add to Cart</button>
                                                        </div>
                                                    </div>
                                                    <div className="product_fav"><i className="fas fa-heart"></i></div>
                                                    <ul className="product_marks">
                                                        <li className="product_mark product_discount">-25%</li>
                                                        <li className="product_mark product_new">new</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/*<!-- Slider Item -->*/}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_5.png" alt="" /></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$225</div>
                                                        <div className="product_name"><div><a href="product.html">Canon STM Kit...</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background:"#b19c83"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#000000"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#999999"}}></input>
                                                            </div>
                                                            <button className="product_cart_button">Add to Cart</button>
                                                        </div>
                                                    </div>
                                                    <div className="product_fav"><i className="fas fa-heart"></i></div>
                                                    <ul className="product_marks">
                                                        <li className="product_mark product_discount"></li>
                                                        <li className="product_mark product_new">new</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/*<!-- Slider Item -->*/}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_6.png" alt="" /></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$379</div>
                                                        <div className="product_name"><div><a href="product.html">Samsung J330F...</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background:"#b19c83"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#000000"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#999999"}}></input>
                                                            </div>
                                                            <button className="product_cart_button">Add to Cart</button>
                                                        </div>
                                                    </div>
                                                    <div className="product_fav"><i className="fas fa-heart"></i></div>
                                                    <ul className="product_marks">
                                                        <li className="product_mark product_discount"></li>
                                                        <li className="product_mark product_new">new</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/*<!-- Slider Item -->*/}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_7.png" alt="" /></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$379</div>
                                                        <div className="product_name"><div><a href="product.html">Lenovo IdeaPad</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background:"#b19c83"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#000000"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#999999"}}></input>
                                                            </div>
                                                            <button className="product_cart_button">Add to Cart</button>
                                                        </div>
                                                    </div>
                                                    <div className="product_fav"><i className="fas fa-heart"></i></div>
                                                    <ul className="product_marks">
                                                        <li className="product_mark product_discount">-25%</li>
                                                        <li className="product_mark product_new">new</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/*<!-- Slider Item -->*/}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_8.png" alt="" /></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$225</div>
                                                        <div className="product_name"><div><a href="product.html">Digitus EDNET...</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background:"#b19c83"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#000000"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#999999"}}></input>
                                                            </div>
                                                            <button className="product_cart_button">Add to Cart</button>
                                                        </div>
                                                    </div>
                                                    <div className="product_fav"><i className="fas fa-heart"></i></div>
                                                    <ul className="product_marks">
                                                        <li className="product_mark product_discount"></li>
                                                        <li className="product_mark product_new">new</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/*<!-- Slider Item -->*/}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_1.png" alt="" /></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$225</div>
                                                        <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background:"#b19c83"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#000000"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#999999"}}></input>
                                                            </div>
                                                            <button className="product_cart_button">Add to Cart</button>
                                                        </div>
                                                    </div>
                                                    <div className="product_fav"><i className="fas fa-heart"></i></div>
                                                    <ul className="product_marks">
                                                        <li className="product_mark product_discount"></li>
                                                        <li className="product_mark product_new">new</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/*<!-- Slider Item -->*/}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_2.png" alt="" /></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$379</div>
                                                        <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background:"#b19c83"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#000000"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#999999"}}></input>
                                                            </div>
                                                            <button className="product_cart_button">Add to Cart</button>
                                                        </div>
                                                    </div>
                                                    <div className="product_fav"><i className="fas fa-heart"></i></div>
                                                    <ul className="product_marks">
                                                        <li className="product_mark product_discount"></li>
                                                        <li className="product_mark product_new">new</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/*<!-- Slider Item -->*/}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_3.png" alt="" /></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$379</div>
                                                        <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background:"#b19c83"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#000000"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#999999"}}></input>
                                                            </div>
                                                            <button className="product_cart_button">Add to Cart</button>
                                                        </div>
                                                    </div>
                                                    <div className="product_fav"><i className="fas fa-heart"></i></div>
                                                    <ul className="product_marks">
                                                        <li className="product_mark product_discount"></li>
                                                        <li className="product_mark product_new">new</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/*<!-- Slider Item -->*/}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_4.png" alt="" /></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$225</div>
                                                        <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background:"#b19c83"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#000000"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#999999"}}></input>
                                                            </div>
                                                            <button className="product_cart_button">Add to Cart</button>
                                                        </div>
                                                    </div>
                                                    <div className="product_fav"><i className="fas fa-heart"></i></div>
                                                    <ul className="product_marks">
                                                        <li className="product_mark product_discount"></li>
                                                        <li className="product_mark product_new">new</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/*<!-- Slider Item -->*/}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_5.png" alt="" /></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$225</div>
                                                        <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background:"#b19c83"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#000000"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#999999"}}></input>
                                                            </div>
                                                            <button className="product_cart_button">Add to Cart</button>
                                                        </div>
                                                    </div>
                                                    <div className="product_fav"><i className="fas fa-heart"></i></div>
                                                    <ul className="product_marks">
                                                        <li className="product_mark product_discount"></li>
                                                        <li className="product_mark product_new">new</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/*<!-- Slider Item -->*/}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_6.png" alt="" /></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$379</div>
                                                        <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background:"#b19c83"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#000000"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#999999"}}></input>
                                                            </div>
                                                            <button className="product_cart_button">Add to Cart</button>
                                                        </div>
                                                    </div>
                                                    <div className="product_fav"><i className="fas fa-heart"></i></div>
                                                    <ul className="product_marks">
                                                        <li className="product_mark product_discount"></li>
                                                        <li className="product_mark product_new">new</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/*<!-- Slider Item -->*/}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_7.png" alt="" /></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$379</div>
                                                        <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background:"#b19c83"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#000000"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#999999"}}></input>
                                                            </div>
                                                            <button className="product_cart_button">Add to Cart</button>
                                                        </div>
                                                    </div>
                                                    <div className="product_fav"><i className="fas fa-heart"></i></div>
                                                    <ul className="product_marks">
                                                        <li className="product_mark product_discount"></li>
                                                        <li className="product_mark product_new">new</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/*<!-- Slider Item -->*/}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_8.png" alt="" /></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$225</div>
                                                        <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background:"#b19c83"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#000000"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#999999"}}></input>
                                                            </div>
                                                            <button className="product_cart_button">Add to Cart</button>
                                                        </div>
                                                    </div>
                                                    <div className="product_fav"><i className="fas fa-heart"></i></div>
                                                    <ul className="product_marks">
                                                        <li className="product_mark product_discount"></li>
                                                        <li className="product_mark product_new">new</li>
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="featured_slider_dots_cover"></div>
                                    </div>

                                    {/*<!-- Product Panel -->*/}

                                    <div className="product_panel panel">
                                        <div className="featured_slider slider">

                                            {/*<!-- Slider Item -->*/}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item discount d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_1.png" alt="" /></div>
                                                    <div className="product_content">
                                                        <div className="product_price discount">$225<span>$300</span></div>
                                                        <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background:"#b19c83"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#000000"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#999999"}}></input>
                                                            </div>
                                                            <button className="product_cart_button">Add to Cart</button>
                                                        </div>
                                                    </div>
                                                    <div className="product_fav"><i className="fas fa-heart"></i></div>
                                                    <ul className="product_marks">
                                                        <li className="product_mark product_discount">-25%</li>
                                                        <li className="product_mark product_new">new</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/*<!-- Slider Item -->*/}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_2.png" alt="" /></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$379</div>
                                                        <div className="product_name"><div><a href="product.html">Apple iPod shuffle</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background:"#b19c83"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#000000"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#999999"}}></input>
                                                            </div>
                                                            <button className="product_cart_button active">Add to Cart</button>
                                                        </div>
                                                    </div>
                                                    <div className="product_fav"><i className="fas fa-heart"></i></div>
                                                    <ul className="product_marks">
                                                        <li className="product_mark product_discount"></li>
                                                        <li className="product_mark product_new">new</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/*<!-- Slider Item -->*/}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_3.png" alt="" /></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$379</div>
                                                        <div className="product_name"><div><a href="product.html">Sony MDRZX310W</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background:"#b19c83"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#000000"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#999999"}}></input>
                                                            </div>
                                                            <button className="product_cart_button">Add to Cart</button>
                                                        </div>
                                                    </div>
                                                    <div className="product_fav"><i className="fas fa-heart"></i></div>
                                                    <ul className="product_marks">
                                                        <li className="product_mark product_discount"></li>
                                                        <li className="product_mark product_new">new</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/*<!-- Slider Item -->*/}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item discount d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_4.png" alt="" /></div>
                                                    <div className="product_content">
                                                        <div className="product_price discount">$225<span>$300</span></div>
                                                        <div className="product_name"><div><a href="product.html">LUNA Smartphone</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background:"#b19c83"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#000000"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#999999"}}></input>
                                                            </div>
                                                            <button className="product_cart_button">Add to Cart</button>
                                                        </div>
                                                    </div>
                                                    <div className="product_fav"><i className="fas fa-heart"></i></div>
                                                    <ul className="product_marks">
                                                        <li className="product_mark product_discount">-25%</li>
                                                        <li className="product_mark product_new">new</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/*<!-- Slider Item -->*/}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_5.png" alt="" /></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$225</div>
                                                        <div className="product_name"><div><a href="product.html">Canon STM Kit...</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background:"#b19c83"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#000000"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#999999"}}></input>
                                                            </div>
                                                            <button className="product_cart_button">Add to Cart</button>
                                                        </div>
                                                    </div>
                                                    <div className="product_fav"><i className="fas fa-heart"></i></div>
                                                    <ul className="product_marks">
                                                        <li className="product_mark product_discount"></li>
                                                        <li className="product_mark product_new">new</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/*<!-- Slider Item -->*/}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_6.png" alt="" /></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$379</div>
                                                        <div className="product_name"><div><a href="product.html">Samsung J330F...</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background:"#b19c83"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#000000"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#999999"}}></input>
                                                            </div>
                                                            <button className="product_cart_button">Add to Cart</button>
                                                        </div>
                                                    </div>
                                                    <div className="product_fav"><i className="fas fa-heart"></i></div>
                                                    <ul className="product_marks">
                                                        <li className="product_mark product_discount"></li>
                                                        <li className="product_mark product_new">new</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/*<!-- Slider Item -->*/}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_7.png" alt="" /></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$379</div>
                                                        <div className="product_name"><div><a href="product.html">Lenovo IdeaPad</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background:"#b19c83"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#000000"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#999999"}}></input>
                                                            </div>
                                                            <button className="product_cart_button">Add to Cart</button>
                                                        </div>
                                                    </div>
                                                    <div className="product_fav"><i className="fas fa-heart"></i></div>
                                                    <ul className="product_marks">
                                                        <li className="product_mark product_discount">-25%</li>
                                                        <li className="product_mark product_new">new</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/*<!-- Slider Item -->*/}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_8.png" alt="" /></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$225</div>
                                                        <div className="product_name"><div><a href="product.html">Digitus EDNET...</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background:"#b19c83"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#000000"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#999999"}}></input>
                                                            </div>
                                                            <button className="product_cart_button">Add to Cart</button>
                                                        </div>
                                                    </div>
                                                    <div className="product_fav"><i className="fas fa-heart"></i></div>
                                                    <ul className="product_marks">
                                                        <li className="product_mark product_discount"></li>
                                                        <li className="product_mark product_new">new</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/*<!-- Slider Item -->*/}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_1.png" alt="" /></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$225</div>
                                                        <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background:"#b19c83"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#000000"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#999999"}}></input>
                                                            </div>
                                                            <button className="product_cart_button">Add to Cart</button>
                                                        </div>
                                                    </div>
                                                    <div className="product_fav"><i className="fas fa-heart"></i></div>
                                                    <ul className="product_marks">
                                                        <li className="product_mark product_discount"></li>
                                                        <li className="product_mark product_new">new</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/*<!-- Slider Item -->*/}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_2.png" alt="" /></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$379</div>
                                                        <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background:"#b19c83"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#000000"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#999999"}}></input>
                                                            </div>
                                                            <button className="product_cart_button">Add to Cart</button>
                                                        </div>
                                                    </div>
                                                    <div className="product_fav"><i className="fas fa-heart"></i></div>
                                                    <ul className="product_marks">
                                                        <li className="product_mark product_discount"></li>
                                                        <li className="product_mark product_new">new</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/*<!-- Slider Item -->*/}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_3.png" alt="" /></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$379</div>
                                                        <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background:"#b19c83"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#000000"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#999999"}}></input>
                                                            </div>
                                                            <button className="product_cart_button">Add to Cart</button>
                                                        </div>
                                                    </div>
                                                    <div className="product_fav"><i className="fas fa-heart"></i></div>
                                                    <ul className="product_marks">
                                                        <li className="product_mark product_discount"></li>
                                                        <li className="product_mark product_new">new</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/*<!-- Slider Item -->*/}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_4.png" alt="" /></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$225</div>
                                                        <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background:"#b19c83"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#000000"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#999999"}}></input>
                                                            </div>
                                                            <button className="product_cart_button">Add to Cart</button>
                                                        </div>
                                                    </div>
                                                    <div className="product_fav"><i className="fas fa-heart"></i></div>
                                                    <ul className="product_marks">
                                                        <li className="product_mark product_discount"></li>
                                                        <li className="product_mark product_new">new</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/*<!-- Slider Item -->*/}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_5.png" alt="" /></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$225</div>
                                                        <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background:"#b19c83"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#000000"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#999999"}}></input>
                                                            </div>
                                                            <button className="product_cart_button">Add to Cart</button>
                                                        </div>
                                                    </div>
                                                    <div className="product_fav"><i className="fas fa-heart"></i></div>
                                                    <ul className="product_marks">
                                                        <li className="product_mark product_discount"></li>
                                                        <li className="product_mark product_new">new</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/*<!-- Slider Item -->*/}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_6.png" alt="" /></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$379</div>
                                                        <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background:"#b19c83"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#000000"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#999999"}}></input>
                                                            </div>
                                                            <button className="product_cart_button">Add to Cart</button>
                                                        </div>
                                                    </div>
                                                    <div className="product_fav"><i className="fas fa-heart"></i></div>
                                                    <ul className="product_marks">
                                                        <li className="product_mark product_discount"></li>
                                                        <li className="product_mark product_new">new</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/*<!-- Slider Item -->*/}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_7.png" alt="" /></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$379</div>
                                                        <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background:"#b19c83"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#000000"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#999999"}}></input>
                                                            </div>
                                                            <button className="product_cart_button">Add to Cart</button>
                                                        </div>
                                                    </div>
                                                    <div className="product_fav"><i className="fas fa-heart"></i></div>
                                                    <ul className="product_marks">
                                                        <li className="product_mark product_discount"></li>
                                                        <li className="product_mark product_new">new</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/*<!-- Slider Item -->*/}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_8.png" alt="" /></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$225</div>
                                                        <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background:"#b19c83"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#000000"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#999999"}}></input>
                                                            </div>
                                                            <button className="product_cart_button">Add to Cart</button>
                                                        </div>
                                                    </div>
                                                    <div className="product_fav"><i className="fas fa-heart"></i></div>
                                                    <ul className="product_marks">
                                                        <li className="product_mark product_discount"></li>
                                                        <li className="product_mark product_new">new</li>
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="featured_slider_dots_cover"></div>
                                    </div>

                                    {/*<!-- Product Panel -->*/}

                                    <div className="product_panel panel">
                                        <div className="featured_slider slider">

                                            {/*<!-- Slider Item -->*/}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item discount d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_1.png" alt="" /></div>
                                                    <div className="product_content">
                                                        <div className="product_price discount">$225<span>$300</span></div>
                                                        <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background:"#b19c83"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#000000"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#999999"}}></input>
                                                            </div>
                                                            <button className="product_cart_button">Add to Cart</button>
                                                        </div>
                                                    </div>
                                                    <div className="product_fav"><i className="fas fa-heart"></i></div>
                                                    <ul className="product_marks">
                                                        <li className="product_mark product_discount">-25%</li>
                                                        <li className="product_mark product_new">new</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/*<!-- Slider Item -->*/}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_2.png" alt="" /></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$379</div>
                                                        <div className="product_name"><div><a href="product.html">Apple iPod shuffle</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background:"#b19c83"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#000000"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#999999"}}></input>
                                                            </div>
                                                            <button className="product_cart_button active">Add to Cart</button>
                                                        </div>
                                                    </div>
                                                    <div className="product_fav"><i className="fas fa-heart"></i></div>
                                                    <ul className="product_marks">
                                                        <li className="product_mark product_discount"></li>
                                                        <li className="product_mark product_new">new</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/*<!-- Slider Item -->*/}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_3.png" alt="" /></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$379</div>
                                                        <div className="product_name"><div><a href="product.html">Sony MDRZX310W</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background:"#b19c83"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#000000"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#999999"}}></input>
                                                            </div>
                                                            <button className="product_cart_button">Add to Cart</button>
                                                        </div>
                                                    </div>
                                                    <div className="product_fav"><i className="fas fa-heart"></i></div>
                                                    <ul className="product_marks">
                                                        <li className="product_mark product_discount"></li>
                                                        <li className="product_mark product_new">new</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/*<!-- Slider Item -->*/}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item discount d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_4.png" alt="" /></div>
                                                    <div className="product_content">
                                                        <div className="product_price discount">$225<span>$300</span></div>
                                                        <div className="product_name"><div><a href="product.html">LUNA Smartphone</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background:"#b19c83"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#000000"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#999999"}}></input>
                                                            </div>
                                                            <button className="product_cart_button">Add to Cart</button>
                                                        </div>
                                                    </div>
                                                    <div className="product_fav"><i className="fas fa-heart"></i></div>
                                                    <ul className="product_marks">
                                                        <li className="product_mark product_discount">-25%</li>
                                                        <li className="product_mark product_new">new</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/*<!-- Slider Item -->*/}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_5.png" alt="" /></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$225</div>
                                                        <div className="product_name"><div><a href="product.html">Canon STM Kit...</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background:"#b19c83"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#000000"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#999999"}}></input>
                                                            </div>
                                                            <button className="product_cart_button">Add to Cart</button>
                                                        </div>
                                                    </div>
                                                    <div className="product_fav"><i className="fas fa-heart"></i></div>
                                                    <ul className="product_marks">
                                                        <li className="product_mark product_discount"></li>
                                                        <li className="product_mark product_new">new</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/*<!-- Slider Item -->*/}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_6.png" alt="" /></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$379</div>
                                                        <div className="product_name"><div><a href="product.html">Samsung J330F...</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background:"#b19c83"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#000000"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#999999"}}></input>
                                                            </div>
                                                            <button className="product_cart_button">Add to Cart</button>
                                                        </div>
                                                    </div>
                                                    <div className="product_fav"><i className="fas fa-heart"></i></div>
                                                    <ul className="product_marks">
                                                        <li className="product_mark product_discount"></li>
                                                        <li className="product_mark product_new">new</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/*<!-- Slider Item -->*/}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_7.png" alt="" /></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$379</div>
                                                        <div className="product_name"><div><a href="product.html">Lenovo IdeaPad</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background:"#b19c83"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#000000"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#999999"}}></input>
                                                            </div>
                                                            <button className="product_cart_button">Add to Cart</button>
                                                        </div>
                                                    </div>
                                                    <div className="product_fav"><i className="fas fa-heart"></i></div>
                                                    <ul className="product_marks">
                                                        <li className="product_mark product_discount">-25%</li>
                                                        <li className="product_mark product_new">new</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/*<!-- Slider Item -->*/}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_8.png" alt="" /></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$225</div>
                                                        <div className="product_name"><div><a href="product.html">Digitus EDNET...</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background:"#b19c83"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#000000"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#999999"}}></input>
                                                            </div>
                                                            <button className="product_cart_button">Add to Cart</button>
                                                        </div>
                                                    </div>
                                                    <div className="product_fav"><i className="fas fa-heart"></i></div>
                                                    <ul className="product_marks">
                                                        <li className="product_mark product_discount"></li>
                                                        <li className="product_mark product_new">new</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/*<!-- Slider Item -->*/}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_1.png" alt="" /></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$225</div>
                                                        <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background:"#b19c83"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#000000"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#999999"}}></input>
                                                            </div>
                                                            <button className="product_cart_button">Add to Cart</button>
                                                        </div>
                                                    </div>
                                                    <div className="product_fav"><i className="fas fa-heart"></i></div>
                                                    <ul className="product_marks">
                                                        <li className="product_mark product_discount"></li>
                                                        <li className="product_mark product_new">new</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/*<!-- Slider Item -->*/}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_2.png" alt="" /></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$379</div>
                                                        <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background:"#b19c83"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#000000"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#999999"}}></input>
                                                            </div>
                                                            <button className="product_cart_button">Add to Cart</button>
                                                        </div>
                                                    </div>
                                                    <div className="product_fav"><i className="fas fa-heart"></i></div>
                                                    <ul className="product_marks">
                                                        <li className="product_mark product_discount"></li>
                                                        <li className="product_mark product_new">new</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/*<!-- Slider Item -->*/}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_3.png" alt="" /></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$379</div>
                                                        <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background:"#b19c83"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#000000"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#999999"}}></input>
                                                            </div>
                                                            <button className="product_cart_button">Add to Cart</button>
                                                        </div>
                                                    </div>
                                                    <div className="product_fav"><i className="fas fa-heart"></i></div>
                                                    <ul className="product_marks">
                                                        <li className="product_mark product_discount"></li>
                                                        <li className="product_mark product_new">new</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/*<!-- Slider Item -->*/}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_4.png" alt="" /></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$225</div>
                                                        <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background:"#b19c83"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#000000"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#999999"}}></input>
                                                            </div>
                                                            <button className="product_cart_button">Add to Cart</button>
                                                        </div>
                                                    </div>
                                                    <div className="product_fav"><i className="fas fa-heart"></i></div>
                                                    <ul className="product_marks">
                                                        <li className="product_mark product_discount"></li>
                                                        <li className="product_mark product_new">new</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/*<!-- Slider Item -->*/}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_5.png" alt="" /></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$225</div>
                                                        <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background:"#b19c83"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#000000"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#999999"}}></input>
                                                            </div>
                                                            <button className="product_cart_button">Add to Cart</button>
                                                        </div>
                                                    </div>
                                                    <div className="product_fav"><i className="fas fa-heart"></i></div>
                                                    <ul className="product_marks">
                                                        <li className="product_mark product_discount"></li>
                                                        <li className="product_mark product_new">new</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/*<!-- Slider Item -->*/}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_6.png" alt="" /></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$379</div>
                                                        <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background:"#b19c83"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#000000"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#999999"}}></input>
                                                            </div>
                                                            <button className="product_cart_button">Add to Cart</button>
                                                        </div>
                                                    </div>
                                                    <div className="product_fav"><i className="fas fa-heart"></i></div>
                                                    <ul className="product_marks">
                                                        <li className="product_mark product_discount"></li>
                                                        <li className="product_mark product_new">new</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/*<!-- Slider Item -->*/}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_7.png" alt="" /></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$379</div>
                                                        <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background:"#b19c83"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#000000"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#999999"}}></input>
                                                            </div>
                                                            <button className="product_cart_button">Add to Cart</button>
                                                        </div>
                                                    </div>
                                                    <div className="product_fav"><i className="fas fa-heart"></i></div>
                                                    <ul className="product_marks">
                                                        <li className="product_mark product_discount"></li>
                                                        <li className="product_mark product_new">new</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/*<!-- Slider Item -->*/}
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <div className="product_item d-flex flex-column align-items-center justify-content-center text-center">
                                                    <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src="images/featured_8.png" alt="" /></div>
                                                    <div className="product_content">
                                                        <div className="product_price">$225</div>
                                                        <div className="product_name"><div><a href="product.html">Huawei MediaPad...</a></div></div>
                                                        <div className="product_extras">
                                                            <div className="product_color">
                                                                <input type="radio" checked name="product_color" style={{background:"#b19c83"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#000000"}}></input>
                                                                <input type="radio" name="product_color" style={{background:"#999999"}}></input>
                                                            </div>
                                                            <button className="product_cart_button">Add to Cart</button>
                                                        </div>
                                                    </div>
                                                    <div className="product_fav"><i className="fas fa-heart"></i></div>
                                                    <ul className="product_marks">
                                                        <li className="product_mark product_discount"></li>
                                                        <li className="product_mark product_new">new</li>
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="featured_slider_dots_cover"></div>
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
 
export default DealsFeatured;