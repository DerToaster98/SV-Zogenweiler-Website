import { Component } from "react";

import 'react-slideshow-image/dist/styles.css';
import logo from "../../assets/Logo_SV_Zogenweiler.png";

import './home.css';

export default class Home extends Component {
    /*
    TODO: Eventuell das ganze so umstellen, dass im UTC Format angezeigt wird
    */
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
                                <h3 className="text-color-black">Willkommen auf unserer Webseite!</h3>
                                <span>Hier findest Du die wichtigsten Informationen rund um unseren Schützenverein.</span>
                                <br/>
                                <br/>
                                <span>Kontaktiere uns oder komme an einem unserer Trainingsabende vorbei.</span>
                                <br/>
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
                            <h3>Jugendtraining</h3>
                            <dl>
                                <dt>
                                    <span>Mittwochs 18:30 - 19:30 Uhr</span>
                                </dt>
                            </dl>
                            <h3>Trainingsabend</h3> 
                            <dl>
                                <dt>
                                    <span>Mittwochs 19:30 - 21:30 Uhr</span>
                                </dt>
                            </dl>
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