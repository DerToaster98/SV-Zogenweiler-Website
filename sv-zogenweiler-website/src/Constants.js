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