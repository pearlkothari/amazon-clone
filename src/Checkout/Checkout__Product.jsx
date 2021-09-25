import Rating from '@mui/material/Rating';
import './Checkout__Product.css';
import React,{Component} from "react";
import Button from '@mui/material/Button';

class Checkout__Product extends Component{
    render(){
        return(
            <div className="checkout_product">
                <img className="checkout_product_img" src={this.props.image}
                    alt=""
                />
                <div className="checkoutProduct__info">
                    <p className='checkoutProduct__title'>
                        <strong>{this.props.title}</strong>
                    </p>
                    <p className="checkoutProduct__price">
                        <small>₹</small>
                        <strong>{this.props.price}</strong>
                    </p>
                    <div className="mui">
                        <Rating variant="half-rating" size="small" defaultValue={this.props.rating} precision={0.5} />
                        <Button variant="contained">Remove From Cart</Button>   
                    </div>                 
                </div>
            </div>
        )
    }
}

export default Checkout__Product;