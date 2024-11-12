import { Component } from "react";

import 'react-slideshow-image/dist/styles.css';
import logo from "../../assets/Logo_SV_Zogenweiler.png";

import './home.css';

export default class Home extends Component {
    render() {
        return(
            <div className="home">
                <div className="page-content">
                    <header>
                        <h1>Startseite</h1>
                    </header>
                    <article>
                        <div className="text-side-by-side">
                            <div className="image-container">
                                <img alt="SV-Logo" src={logo} className="logo-home-text"></img>
                            </div>    
                            <div>
                                <span>123</span>
                                <br/>
                                <span>123</span>
                                <br/>
                                <span>123</span>
                                <br/>
                            </div>
                        </div>
                    </article>
                </div>
                <div className="green-bar-background">
                    <div className="page-content">
                        <header>
                            <h2>Trainingszeiten</h2>
                        </header>
                        <article>
                        </article>
                    </div>
                </div>
            </div>
        );
    }
}