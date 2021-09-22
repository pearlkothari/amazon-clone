import React,{Component} from 'react';
import {BrowserRouter as Router,Link} from "react-router-dom";
import './Home.css';

class Home extends Component{
    render(){
        return(
            <div className="Home__page">
                <div clasName="Home__Prime__Container">
                    <a href="https://www.primevideo.com">
                        <img className="Prime__Image" src="https://store-images.s-microsoft.com/image/apps.16285.14618985536919905.552c0017-6644-49a8-8467-8f7b34ce0428.30ad6b05-16d9-4d5e-a242-43107708a16a?mode=scale&q=90&h=1080&w=1920"
                            width="100%" height="80%"
                            alt=""
                        />
                    </a>
                </div>
                <div className="home__row">
                    
                </div>
                <div className="home__row">
                    
                </div>
                <div className="home__row">
                    
                </div>
            </div>
        )
    }

}

export default Home;