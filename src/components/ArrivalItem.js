import React from 'react';

const ArrivalItem = (props) => {
    return ( <>
    <div className="arrivals_slider_item">
        <div className="border_active"></div>
        <div className={`product_item ${props.tag} d-flex flex-column align-items-center justify-content-center text-center`}>
            <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src={props.thumbnail} alt="" /></div>
            <div className="product_content">
                <div className="product_price">${props.price}</div>
                <div className="product_name"><div><a href="product.html">{props.name}</a></div></div>
                <div className="product_extras">
                    <div className="product_color">
                        {props.colors.map(color => <input key={color.hex} type="radio" name="product_color" style={{background:color.hex}}></input>)}
                    </div>
                    <button className="product_cart_button">Add to Cart</button>
                </div>
            </div>
            <div className="product_fav"><i className="fas fa-heart"></i></div>
            <ul className="product_marks">
                <li className="product_mark product_discount">-{props.discount}%</li>
                <li className="product_mark product_new">new</li>
            </ul>
        </div>
    </div>
    </> );
}
 
export default ArrivalItem;