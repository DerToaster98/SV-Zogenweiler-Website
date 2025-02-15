import { Component } from "react";

import 'react-slideshow-image/dist/styles.css';
import logo from "../../assets/Logo_SV_Zogenweiler.png";

import './home.css';
import { BrowserView, MobileView } from "react-device-detect";

export default class Home extends Component {
    /*
    TODO: Eventuell das ganze so umstellen, dass im UTC Format angezeigt wird
    */
    render() {
        return(
            <div className="home">
                <div className="page-content">

                    <article>
                        <h1 className="text-color-green">Startseite</h1>
                        <BrowserView>
                            <div className="text-side-by-side">
                                <div className="image-container">
                                    <img alt="SV-Logo" src={logo} className="logo-home-text"></img>
                                </div>    
                                <div>
                                    <h3 className="text-color-green">Willkommen auf unserer Webseite!</h3>
                                    <span>Hier findest Du die wichtigsten Informationen rund um unseren Schützenverein.</span>
                                    <br/>
                                    <br/>
                                    <span>Kontaktiere uns oder komme an einem unserer Trainingsabende vorbei.</span>
                                    <br/>
                                    <br/>
                                </div>
                            </div>
                        </BrowserView>
                        <MobileView>
                            <div className="text-top-and-bottom">
                                <div className="image-container">
                                    <img alt="SV-Logo" src={logo} className="logo-home-text-mobile"></img>
                                </div>    
                                <div>
                                    <h3 className="text-color-green">Willkommen auf unserer Webseite!</h3>
                                    <span>Hier findest Du die wichtigsten Informationen rund um unseren Schützenverein.</span>
                                    <br/>
                                    <br/>
                                    <span>Kontaktiere uns oder komme an einem unserer Trainingsabende vorbei.</span>
                                    <br/>
                                    <br/>
                                </div>
                            </div>
                        </MobileView>
                    </article>
                </div>
                <div className="green-bar-background">
                    <div className="page-content">
                        <article>                            
                            <h2>Trainingszeiten</h2>
                            <div className="indent-left">
                                <h3>Jugendtraining</h3>
                                <dl className="indent-left">
                                    <dt>
                                        <span>Mittwochs 18:30 - 19:30 Uhr</span>
                                    </dt>
                                </dl>
                                <h3>Trainingsabend</h3> 
                                <dl className="indent-left">
                                    <dt>
                                        <span>Mittwochs 19:30 - 21:30 Uhr</span>
                                    </dt>
                                </dl>
                            </div>
                        </article>
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
            </div>
        );
    }
}