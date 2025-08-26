function initMap() {
    const locations = [
        {
            name: "Matero, Lilanda - Zambia",
            coords: { lat: -15.3524, lng: 28.2573 },
            address: "Matero, Lilanda, Lusaka, Zambia"
        },
        {
            name: "Masvingo District - Zimbabwe",
            coords: { lat: -20.0658, lng: 30.8354 },
            address: "Masvingo District, Zimbabwe"
        },
        {
            name: "Sozo Foundation, Vrygrond - South Africa",
            coords: { lat: -34.0991, lng: 18.4729 },
            address: "Sozo Foundation, Vrygrond, Cape Town, South Africa"
        }
    ];

    // Create a new map centered on the first location
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4, // A lower zoom level is better for multiple, widely spaced locations
        center: locations[0].coords,
    });

    // Loop through the locations and add a marker for each one
    locations.forEach(location => {
        const marker = new google.maps.Marker({
            position: location.coords,
            map: map,
            title: location.name,
        });

        const infoWindow = new google.maps.InfoWindow({
            content: `<h3>${location.name}</h3><p>${location.address}</p>`
        });

        marker.addListener("click", () => {
            infoWindow.open(map, marker);
        });
    });
}

// dropdown on team page
document.addEventListener('DOMContentLoaded', () => {
    const teamFilter = document.getElementById('team-filter');
    const teamLocations = document.querySelectorAll('.team-location');

    // Add event listener to the dropdown menu
    teamFilter.addEventListener('change', (event) => {
        const selectedValue = event.target.value;

        // Loop through all team location divs and apply the display logic
        teamLocations.forEach(locationDiv => {
            // Show all divs if "All Locations" is selected
            if (selectedValue === 'all') {
                locationDiv.style.display = 'grid'; 
            } 
            // Show only the selected location's div
            else if (locationDiv.id === `${selectedValue}-team`) {
                locationDiv.style.display = 'grid'; 
            } 
            // Hide all other divs
            else {
                locationDiv.style.display = 'none';
            }
        });
    });
});

