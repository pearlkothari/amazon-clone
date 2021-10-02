import Rating from '@mui/material/Rating';
import './Checkout__Product.css';
import React from "react";
import Button from '@mui/material/Button';
import FlipMove from 'react-flip-move';
import {useStateValue } from "../State/StateProvider";


function Checkout__Product({image_slider,id,title,image,price,rating}){
    const [{basket},dispatch] = useStateValue();

    const removeFromBasket =() =>{
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            ID:id,
        })
    }
        return(
                <div className="checkout_product">
                    {!image_slider && <img className="checkout_product_img" src={image} alt=""/>}
                    {image_slider && <img className="checkout_product_img" src={image[0].url} alt=""/>}
                    {/* <img className="checkout_product_img" src={image}
                        alt=""
                    /> */}
                    <div className="checkoutProduct__info">
                        <p className='checkoutProduct__title'>
                            <strong>{title}</strong>
                        </p>
                        <p className="checkoutProduct__price">
                            <small>₹</small>
                            <strong>{price}</strong>
                        </p>
                        <div className="mui">
                            <Rating variant="half-rating" size="small" defaultValue={rating} precision={0.5} />
                            <Button variant="contained" onClick={removeFromBasket}>Remove From Cart</Button>   
                        </div>                 
                    </div>
                </div>
        )
}

export default Checkout__Product;