var map = L.map('contact-map').setView([47.691233, 9.186552], 5);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([47.691233, 9.186552]).addTo(map)
    .bindPopup('<strong>University of Konstanz</strong>'+
               '<p>Office Z&nbsp;918<br />Building Z, 78467 Konstanz<br />'+
               '<a href="https://osm.org/go/0C3RhXP9?m=" title="Larger Map">Larger Map</a></p>')
    .openPopup();

