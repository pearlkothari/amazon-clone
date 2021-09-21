import React,{Component} from 'react';
import './Header.css'
import SearchIcon from "@mui/icons-material/Search"

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
                    <SearchIcon 
                        className="header__searchIcon">
                    </SearchIcon>
                </div>

                <div className="header__navbar">
                    <div className="header__option">
                        <span className="header__first">
                            Hello Guest
                        </span>
                        <span className="header__second">
                            Sign in
                        </span>
                    </div>

                    <div className="header__option">
                        <span className="header__first">
                            Returns
                        </span>
                        <span className="header__second">
                             & Orders
                        </span>
                    </div>

                    <div className="header__option">
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