import { Component } from "react";

import 'react-slideshow-image/dist/styles.css';

import './contact.css';

import { ADDRESS, GOOGLE_MAPS_API_KEY, HOUSE_COORDINATES } from "../../Constants";

import {AdvancedMarker, APIProvider, Map, Pin} from '@vis.gl/react-google-maps';

export default class Contact extends Component {
            
    render() {
        return(
            <div className="home">
                <div className="page-content">
                    <header>
                        <h1>Kontakt</h1>
                    </header>
                    <article>
                        <div className="text-side-by-side">                            
                            <div className="fifty-percent-width">
                                <h5 className="text-color-blue">Hier kannst du uns finden</h5>                                
                                <dl>
                                    <dt>
                                        <span className="bold-text">
                                            Schützenhaus Zogenweiler
                                        </span>
                                    </dt>
                                    <dt>
                                        <span>
                                            Görtbild 6
                                        </span>
                                    </dt>
                                    <dt>
                                        <span>
                                            88263 Horgenzell   
                                        </span>
                                    </dt>
                                    <dt><br></br></dt><br></br>
                                    <dt>
                                        <span>
                                            Tel.: 07504 - 1761
                                        </span>
                                    </dt>
                                    <dt>
                                        <span>
                                            (Nur während Öffnungszeiten)
                                        </span>
                                    </dt>
                                </dl>                     
                                {
                                    /* TODO: GoogleMaps Integration
                                    <APIProvider apiKey={GOOGLE_MAPS_API_KEY}>
                                    <Map id="map"
                                        defaultZoom={15}
                                        defaultCenter={
                                            HOUSE_COORDINATES
                                        }
                                    >
                                        <AdvancedMarker
                                            key = "Schützenhaus"
                                            position={HOUSE_COORDINATES}
                                        >
                                            <Pin></Pin>
                                        </AdvancedMarker>                                            
                                    </Map>
                                </APIProvider>       
                                    */
                                }
                            </div>
                            <div className="fifty-percent-width">
                                <h5 className="text-color-blue">Adresse unseres Vosrtands</h5>
                                <dl>
                                    <dt>
                                        <span className="bold-text">
                                            Oberschützenmeister
                                        </span>
                                    </dt>
                                    <dt>
                                        <span>
                                            Rolf Wiggenhauser   
                                        </span>
                                    </dt>
                                    <dt>
                                        <span>
                                            Bettenweiler   
                                        </span>
                                    </dt>
                                    <dt>
                                        <span>
                                            88263 Horgenzell   
                                        </span>
                                    </dt>
                                    <dt><br></br></dt>                                    
                                    <dt>
                                        <span>
                                            Tel.: 07504 - 1822   
                                        </span>
                                    </dt>
                                    <dt>
                                        <span>
                                            <a href="mailto:osm@svzogenweiler.de">osm@svzogenweiler.de   </a>
                                        </span>
                                    </dt>
                                </dl>
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
            </div>
        );
    }
}