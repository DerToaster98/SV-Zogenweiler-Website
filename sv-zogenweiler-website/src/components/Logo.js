import { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo_SV_Zogenweiler.png";

import "./logo.css";
import { BrowserView, MobileView } from "react-device-detect";

export default class Logo extends Component {

    render() {
        return (    
            <div>
                <BrowserView>
                    <div className="logo-container">
                        <Link to="/">                    
                            <img alt="SV-Logo" src={logo} className="logo"></img>
                            <div classname="logo-text">
                                <h1 className="text-white-heading">SV Zogenweiler</h1>
                            </div>
                        </Link>
                    </div>
                </BrowserView>
                <MobileView>                    
                    <div className="logo-container">
                        <Link to="/">                    
                            <img alt="SV-Logo" src={logo} className="logo-mobile"></img>                            
                        </Link>
                    </div>
                </MobileView>
            </div>                        
        );
    }

}