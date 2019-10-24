import React from 'react';
import ArrivalItem from '../components/ArrivalItem';
import Featured from '../data/Featured';
import OnSale from '../data/OnSale';
import BestRated from '../data/BestRated';
import {Link} from 'react-router-dom';

const NewArrivals = (props) => {
    return (
        <>
        <div className="new_arrivals">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="tabbed_container">
                            <div className="tabs clearfix tabs-right">
                                <div className="new_arrivals_title">Hot New Arrivals</div>
                                <ul className="clearfix">
                                    <li className="active">Featured</li>
                                    <li>Audio & Video</li>
                                    <li>Laptops & Computers</li>
                                </ul>
                                <div className="tabs_line"><span></span></div>
                            </div>
                            <div className="row">
                                <div className="col-lg-9" style={{zIndex:"1"}}>

                                    {/*<!-- Product Panel -->*/}
                                    <div className="product_panel panel active">
                                        <div className="arrivals_slider slider">

                                            {Featured.map(item => <ArrivalItem {...item} key={item.id} />)}
                                            {Featured.map(item => <ArrivalItem {...item} key={item.id} />)}    
                                            
                                        </div>
                                        <div className="arrivals_slider_dots_cover"></div>
                                    </div>

                                    {/*<!-- Product Panel -->*/}
                                    <div className="product_panel panel">
                                        <div className="arrivals_slider slider">

                                            {OnSale.map(item => <ArrivalItem {...item} key={item.id} />)}    

                                        </div>
                                        <div className="arrivals_slider_dots_cover"></div>
                                    </div>

                                    {/*<!-- Product Panel -->*/}
                                    <div className="product_panel panel">
                                        <div className="arrivals_slider slider">

                                        {BestRated.map(item => <ArrivalItem {...item} key={item.id} />)}    
                                        {OnSale.map(item => <ArrivalItem {...item} key={item.id} />)}    
                                            
                                        </div>
                                        <div className="arrivals_slider_dots_cover"></div>
                                    </div>

                                </div>

                                <div className="col-lg-3">
                                    <div className="arrivals_single clearfix">
                                        <div className="d-flex flex-column align-items-center justify-content-center">
                                            <div className="arrivals_single_image"><img src="images/new_single.png" alt="" /></div>
                                            <div className="arrivals_single_content">
                                                <div className="arrivals_single_category"><Link to="/">Smartphones</Link></div>
                                                <div className="arrivals_single_name_container clearfix">
                                                    <div className="arrivals_single_name"><Link to="/">LUNA Smartphone</Link></div>
                                                    <div className="arrivals_single_price text-right">$379</div>
                                                </div>
                                                <div className="rating_r rating_r_4 arrivals_single_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                                <form action="#"><button className="arrivals_single_button">Add to Cart</button></form>
                                            </div>
                                            <div className="arrivals_single_fav product_fav active"><i className="fas fa-heart"></i></div>
                                            <ul className="arrivals_single_marks product_marks">
                                                <li className="arrivals_single_mark product_mark product_new">new</li>
                                            </ul>
                                        </div>
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
 
export default NewArrivals;