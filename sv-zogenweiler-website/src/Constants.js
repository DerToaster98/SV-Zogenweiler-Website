export const SITE_BASE_URL = "TBD";
export function getSiteBaseURL() {
    return window.location.origin + "/" + SITE_BASE_URL;
}