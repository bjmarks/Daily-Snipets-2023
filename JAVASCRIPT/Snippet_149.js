function getLocale() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        return "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    console.log(`Latitude: ${position.coords.latitude} \n Longitude: ${position.coords.longitude}`);
}
getLocale();