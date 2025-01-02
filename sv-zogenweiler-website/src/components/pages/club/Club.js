import { Component } from "react";

import './chiefs.css';

export default class Club extends Component {
            
    render() {
        return(
            <div className="club">
                <div className="page-content">
                    <header>
                        <h1>Verein</h1>
                    </header>
                    <article>
                        <span>
                            Wir sind ein Schützenverein in der Gemeinde Horgenzell bei Ravensburg.
                        </span>
                        <span>In unserem Verein gibt es neben den Aufenthaltsräumen drei Schießanlagen:</span>
                        <ul>
                            <li>
                                <span>10x 10m Luftdruckstand</span>
                            </li>
                            <li>
                                <span>6x 50m KK-Stand</span>
                            </li>
                            <li>
                                <span>5x 25m Pistolenhalle</span>
                            </li>
                        </ul>
                    </article>
                </div>
            </div>
        );
    }
}