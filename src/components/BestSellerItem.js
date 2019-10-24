import React from 'react';
import {Link} from 'react-router-dom';
const BestSellerItem = (props) => {
    return ( 
        <>
        <div className={`bestsellers_item ${props.tag}`}>
            <div className="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                <div className="bestsellers_image"><img src={props.thumbnail} alt="" /></div>
                <div className="bestsellers_content">
                    <div className="bestsellers_category"><Link to="/">Headphones</Link></div>
                    <div className="bestsellers_name"><Link to="/product">Xiaomi Redmi Note 4</Link></div>
                    <div className="rating_r rating_r_4 bestsellers_rating"><i></i><i></i><i></i><i></i><i></i></div>
                    <div className="bestsellers_price discount">${props.lowprice}<span>${props.price}</span></div>
                </div>
            </div>
            <div className="bestsellers_fav active"><i className="fas fa-heart"></i></div>
            <ul className="bestsellers_marks">
                <li className="bestsellers_mark bestsellers_discount">-{props.discount}%</li>
                <li className="bestsellers_mark bestsellers_new">new</li>
            </ul>
        </div>
        </>
     );
}
 
export default BestSellerItem;