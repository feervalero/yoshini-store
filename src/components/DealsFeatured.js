import React from 'react';
import Deals from '../data/Deals';
import DealsItem from '../components/DealsItem';
import Featured from '../data/Featured';
import SlideItem from './SlideItem';
import OnSale from '../data/OnSale';
import BestRated from '../data/BestRated';
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

                                        </div>
                                        <div className="featured_slider_dots_cover"></div>
                                    </div>

                                    {/*<!-- Product Panel -->*/}

                                    <div className="product_panel panel">
                                        <div className="featured_slider slider">

                                            {/*<!-- Slider Item -->*/}
                                            {OnSale.map(item => <SlideItem {...item} key={item.id} />)}

                                        </div>
                                        <div className="featured_slider_dots_cover"></div>
                                    </div>

                                    {/*<!-- Product Panel -->*/}

                                    <div className="product_panel panel">
                                        <div className="featured_slider slider">

                                            {BestRated.map(item => <SlideItem {...item} key={item.id} />)}
                                            {OnSale.map(item => <SlideItem {...item} key={item.id} />)}

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