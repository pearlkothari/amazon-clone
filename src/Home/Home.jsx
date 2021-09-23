import React,{Component} from 'react';
import Product from '../Product/Product';
import './Home.css';

class Home extends Component{
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
                            Rating={4.5}
                        />
                        <Product
                            Image="https://m.media-amazon.com/images/I/51hIPZc5OjL._AC_SX522_.jpg"
                            description="Redmi Note 10 
                            ✓Qualcomm® Snapdragon™ 678 processor ✓5000mAh battery ✓Super AMOLED Display"
                            Price='13999'
                            Rating={4.0}
                        />
                        <Product
                            Image="data:image/jpeg;base64,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"
                            description="Gaming Headphone 
                                HyperX Cloud Stinger S gaming headphones with noise-cancelling mic"
                            Price="10000"
                            Rating={4.5}
                        />
                        
                    </div>
                    <div className="home__row">
                        <Product
                            Image="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ce9918f8-cc9d-4c8e-9e4a-8afc4a22fe9b/air-max-2021-shoes-Jkh1p6.png"
                            description="Nike Air Max 2021  Colour Shown: Black/Iron Grey/White  
                                Style: DA1925-001"
                            Price="14647"
                            Rating={4.5}
                        />
                        <Product
                            Image="https://images-eu.ssl-images-amazon.com/images/I/41wCa2TCJ2L._SX342_SY445_QL70_FMwebp_.jpg"
                            description="IFB 6kg 5 Star Fully Automatic Front Loading Washing Machine (Diva Aqua SX, Silver, Express wash, 2D Wash Technology)"
                            Price="22499"
                            Rating={4}
                        />
                    </div>
                    <div className="home__row">
                        <Product
                            Image="https://images.samsung.com/is/image/samsung/in-qled8k-q800t-qa75q800takxxl-lperspectivesilver-229130913?$684_547_PNG$"
                            description="1m 89cm Q800T 8K Smart QLED TV Real 8K Resolution & 8K AI Upscaling
                            Object Tracking Sound +
                            Voice Assistant with One Remote Control"
                            Price="699990.00"
                            Rating={4.5}
                        />
                    </div>
                </div>
                
            </div>
        )
    }

}

export default Home;