import React from 'react';
import OnSale from '../data/OnSale';
import BestSellerItem from '../components/BestSellerItem';
import BestRated from '../data/BestRated';

const BestSellers = (props) => {
    return (
        <>
        <div className="best_sellers">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="tabbed_container">
                            <div className="tabs clearfix tabs-right">
                                <div className="new_arrivals_title">Hot Best Sellers</div>
                                <ul className="clearfix">
                                    <li className="active">Top 20</li>
                                    <li>Audio & Video</li>
                                    <li>Laptops & Computers</li>
                                </ul>
                                <div className="tabs_line"><span></span></div>
                            </div>

                            <div className="bestsellers_panel panel active">

                                <div className="bestsellers_slider slider">

                                    {OnSale.map(item => <BestSellerItem {...item} key={item.id} />)}    

                                </div>
                            </div>

                            <div className="bestsellers_panel panel">

                                <div className="bestsellers_slider slider">

                                    {BestRated.map(item => <BestSellerItem {...item} key={item.id} />)}    

                                </div>
                            </div>

                            <div className="bestsellers_panel panel">

                                <div className="bestsellers_slider slider">

                                    {BestRated.map(item => <BestSellerItem {...item} key={item.id} />)}    

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
 
export default BestSellers;