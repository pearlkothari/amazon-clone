import React,{Component} from 'react';
import Product from '../Product/Product';

import './Home.css';

class Home extends Component{
    tv_images = [
        { url: "https://images.samsung.com/is/image/samsung/p6pim/in/qa85qn900akxxl/gallery/in-neo-qled-8k-qn900a-qa85qn900akxxl-430985143?$684_547_PNG$" },
        { url: "https://images.samsung.com/is/image/samsung/p6pim/in/qa85qn900akxxl/gallery/in-neo-qled-8k-qn900a-qa85qn900akxxl-430956070?$684_547_PNG$" },
    ];
    render(){
        return(
            <div className="Home__page">
                <div clasName="Home__Prime__Container">
                    <img className="Prime__Image" src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/long-term-assets/ad-specs/ss_expanse_do._TTW_.jpg"
                        width="100%" height="80%"
                        alt=""
                    />
                    <div className="home__row">
                        <Product 
                            Image="https://m.media-amazon.com/images/I/51+Uw6N7BnL._AC_SX466_.jpg"
                            description='Apple iPhone 11 Pro Max, 512GB' 
                            Price='94900' 
                            Image_Slider={false}
                            Rating={4.5}
                        />
                        <Product
                            Image="https://m.media-amazon.com/images/I/51hIPZc5OjL._AC_SX522_.jpg"
                            description="Redmi Note 10 
                            ✓Qualcomm® Snapdragon™ 678 processor ✓5000mAh battery ✓Super AMOLED Display"
                            Price='13999'
                            Image_Slider={false}
                            Rating={4.0}
                        />
                        <Product
                            Image="https://m.media-amazon.com/images/I/61hrWzvt9fL._SL1428_.jpg"
                            description="Gaming Headphone 
                                HyperX Cloud Stinger S gaming headphones with noise-cancelling mic"
                            Price="10000"
                            Image_Slider={false}
                            Rating={4.5}
                        />
                        
                    </div>
                    <div className="home__row">
                        <Product
                            Image="https://m.media-amazon.com/images/I/518gsOCe3wL._UY695_.jpg"
                            description="Nike Air Max 2021  Colour Shown: Black/Iron Grey/White  
                                Style: DA1925-001"
                            Price="14647"
                            Image_Slider={false}
                            Rating={4.5}
                        />
                        <Product
                            Image="https://images-eu.ssl-images-amazon.com/images/I/41wCa2TCJ2L._SX342_SY445_QL70_FMwebp_.jpg"
                            description="IFB 6kg 5 Star Fully Automatic Front Loading Washing Machine (Diva Aqua SX, Silver, Express wash, 2D Wash Technology)"
                            Price="22499"
                            Image_Slider={false}
                            Rating={4}
                        />
                    </div>
                    <div className="home__row">
                        <Product
                            Image={this.tv_images}
                            description="1m 89cm Q800T 8K Smart QLED TV Real 8K Resolution & 8K AI Upscaling
                            Object Tracking Sound +
                            Voice Assistant with One Remote Control"
                            Price="699990.00"
                            Image_Slider={true}
                            Rating={4.5}
                        />
                    </div>
                </div>
                
            </div>
        )
    }

}

export default Home;