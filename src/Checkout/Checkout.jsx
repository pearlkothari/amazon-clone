import React,{Component} from "react";
import './Checkout.css'
import Subtotal from './Subtotal.jsx'
import SimpleImageSlider from "react-simple-image-slider";

class Checkout extends Component{
    Ad=[
        {url:"https://images-eu.ssl-images-amazon.com/images/G/31/img16/GiftCards/LPAIndia/Header/170_AP_1500x300.jpg"},
        {url:"https://images-eu.ssl-images-amazon.com/images/G/31/img16/GiftCards/LPAIndia/Offers/Yatra/LPA_201_1500x250.jpg"}
    ]
    render(){
        return(
            <div className="checkout">
                <div className="checkout_left">
                    <SimpleImageSlider
                        width={1150}
                        height={150}
                        images={this.Ad}
                        showNavs={true}
                    />
                    <div>
                        <h2 className="checkout__title">
                            Your Shopping Basket
                        </h2>
                    </div>
                </div>
                <div className="checkout__right">
                    <Subtotal></Subtotal>
                </div>
            </div>
        )
    };
}

export default Checkout;