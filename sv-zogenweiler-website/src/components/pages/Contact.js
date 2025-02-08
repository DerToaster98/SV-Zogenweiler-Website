import { Component } from "react";

import 'react-slideshow-image/dist/styles.css';

import './contact.css';

import { ADDRESS, getClubHouseAddress, getOSMAddress, GOOGLE_MAPS_API_KEY, HOUSE_COORDINATES } from "../../Constants";

import {AdvancedMarker, APIProvider, Map, Pin} from '@vis.gl/react-google-maps';

export default class Contact extends Component {
            
    render() {
        return(
            <div className="contact">
                <div className="page-content">
                    <header>
                        <h1 className="text-color-green">Kontakt</h1>
                    </header>
                    <article>
                        <div className="text-side-by-side">                            
                            <div className="fifty-percent-width">
                                <h5 className="text-color-blue">Hier kannst du uns finden</h5>                                
                                {getClubHouseAddress()}              
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
                                {getOSMAddress()}
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        );
    }
}