export const SITE_BASE_URL = "TBD";

export const ADDRESS = "Görtbild 6, 88263 Horgenzell";

export const GOOGLE_MAPS_API_KEY = "GOOGLE MAPS API KEY";

export const HOUSE_COORDINATES = {
    lat: 47.837921, 
    lng: 9.493331
};

export function getSiteBaseURL() {
    return window.location.origin + "/" + SITE_BASE_URL;
}

export function getClubHouseAddress() {
    return (
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
    );
}

export function getResponsiblePersonAddress() {
    return (
        <dl>            
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
    );
}

export function getOSMAddress() {
    return (
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
    );
}