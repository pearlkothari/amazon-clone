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
                            description='Redmi Note 10'
                            Price='13999'
                            Rating={4.0}
                        />
                        <Product
                            Image="https://images-na.ssl-images-amazon.com/images/I/811tgMXfuxL.__AC_SY300_SX300_QL70_FMwebp_.jpg"
                            description="Gaming Headphone"
                            Price="10000"
                            Rating={4.5}
                        />
                        
                    </div>
                    <div className="home__row">
                        
                    </div>
                    <div className="home__row">
                        
                    </div>
                </div>
                
            </div>
        )
    }

}

export default Home;