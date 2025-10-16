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

export function getClubHouseAddressNoContact() {
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
        </dl>       
    );
}

/*TODO: Das ganze vereinheitlichen mit Konstanten! So ist unschön...*/
export function getResponsiblePersonAddress() {
    return (
        <dl>            
            <dt>
                <span>
                    Daniel Gindele   
                </span>
            </dt>
            <dt>
                <span>
                    Im Obstgarten 9
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
                    Tel.: 0160 - 97673757
                </span>
            </dt>
            <dt>
                <span>
                    <a href="mailto:osm@sv-zogenweiler.de">osm@sv-zogenweiler.de   </a>
                </span>
            </dt>
        </dl>  
    );
}

export function getResponsiblePersonAddresNoContact() {
    return (
        <dl>            
            <dt>
                <span>
                    Daniel Gindele   
                </span>
            </dt>
            <dt>
                <span>
                    Im Obstgarten 9
                </span>
            </dt>
            <dt>
                <span>
                    88263 Horgenzell   
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
                    Daniel Gindele
                </span>
            </dt>
            <dt>
                <span>
                    Im Obstgarten 9 
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
                    Tel.: 0160 - 97673757
                </span>
            </dt>
            <dt>
                <span>
                    <a href="mailto:osm@sv-zogenweiler.de">osm@sv-zogenweiler.de   </a>
                </span>
            </dt>
        </dl>  
    );
}
