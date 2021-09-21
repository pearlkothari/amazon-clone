import React,{Component} from 'react';
import './Header.css'

class Header extends Component{
    render(){
        return(
            <div className="header clearfix">
                <img className="header__logo" 
                    src="https://images-na.ssl-images-amazon.com/images/G/01/gc/designs/livepreview/amazon_dkblue_noto_email_v2016_us-main._CB468775337_.png"/>

                <div className="header__search">
                    <input 
                    className="header__searchInput" 
                    type="text">

                    </input>
                </div>

                <div className="head_navbar">
                    <div className="Sign_In">
                        <span className="header__first">
                            Hello Guest
                        </span>
                        <span className="header__second">
                            Sign in
                        </span>
                    </div>

                    <div className="Return__Orders">
                        <span className="header__first">
                            Returns
                        </span>
                        <span className="header__second">
                             & Orders
                        </span>
                    </div>

                    <div className="Your__Prime">
                        <span className="header__first">
                            Your
                        </span>
                        <span className="header__second">
                            Prime
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}


export default Header;