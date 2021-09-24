import React,{Component} from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import SearchIcon from "@mui/icons-material/Search"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

class Header extends Component{
    constructor(){
        super();

        this.state={
            count:0
        };

        this.update=this.update.bind(this);
    }
    update(){
        this.setState(
            (prev)=>{
                return {count:prev.count+1};
            }
        );
    }
    render(){
        return(
            <div className="header clearfix">
                <Link to="/">
                    <img className="header__logo" 
                        src="https://images-na.ssl-images-amazon.com/images/G/01/gc/designs/livepreview/amazon_dkblue_noto_email_v2016_us-main._CB468775337_.png"
                        alt=""
                    />
                </Link>

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

                    <Link to='/checkout'>
                        <div className="header__optionBasket">
                            <AddShoppingCartIcon/>
                            <span className="header__second header__basketCount">{this.props.cart}</span>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}


export default Header;