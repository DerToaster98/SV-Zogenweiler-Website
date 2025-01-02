import { Component } from "react";

import './chiefs.css';

export default class Chiefs extends Component {
            
    render() {
        return(
            <div className="chiefs">
                <div className="page-content">
                    <header>
                        <h1>Vorstandschaft</h1>
                    </header>
                    <article>
                        <span>Unsere Vorstandschaft setzt sich wie folgt zusammen:</span>
                        <dl>
                            <dt>
                                <span className="bold-text">
                                    Oberschützenmeister:
                                </span>                                
                            </dt>                            
                            <dd>Rolf Wiggenhauser</dd>

                            <br></br>
                            <dt>
                                <span className="bold-text">
                                    Schützenmeisterin:
                                </span>                                
                            </dt>                            
                            <dd>Michaela Deiß</dd>

                            <br></br>
                            <dt>
                                <span className="bold-text">
                                    Kassierer:
                                </span>                                
                            </dt>                            
                            <dd>Stefan Finsterle</dd>

                            <br></br>
                            <dt>
                                <span className = "bold-text">
                                    Schießleiter:
                                </span>
                            </dt>
                            <dd>Daniel Gindele</dd>
                            <dd>Patrick Tran</dd>

                            <br></br>
                            <dt>
                                <span className = "bold-text">
                                    Jugendleiter:
                                </span>                                
                            </dt>
                            <dd>Florian Graeff</dd>

                            <br></br>
                            <dt>
                                <span className = "bold-text">
                                    Schriftführerin:
                                </span>
                            </dt>
                            <dd>Sandra Rundel</dd>

                            <br></br>
                            <dt>
                                <span className = "bold-text">
                                    Beisitzer und Beisitzerinnen:
                                </span>
                            </dt>
                            <dd>Waltraud Diehl</dd>
                            <dd>Sabrina Finsterle</dd>
                            <dd>Daniel Herrmann</dd>
                            <dd>Thomas Schnetz</dd>
                        </dl>
                    </article>
                </div>                
            </div>
        );
    }
}