if(screen && screen.width >= 720) {
  document.write('<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD2sM6s465-Adt71-rtKwtG1y6ikq4QCxQ&callback=init"></script>');

var map;

function init() {
  var mapOptions = {
    center: new google.maps.LatLng( 49.830134, 7.170165 ),
    zoom: 5,
    zoomControl: false,
    disableDoubleClickZoom: true,
    mapTypeControl: false,
    scaleControl: false,
    scrollwheel: true,
    panControl: false,
    streetViewControl: false,
    draggable: true,
    overviewMapControl: false,
    overviewMapControlOptions: {
      opened: false,
    },
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: [ {
      "featureType": "water",
      "elementType": "geometry.fill",
      "stylers": [ {
        "color": "#E0E6ED"
      } ]
    }, {
      "featureType": "transit",
      "stylers": [ {
        "color": "#808080"
      }, {
        "visibility": "off"
      } ]
    }, {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [ {
        "visibility": "on"
      }, {
        "color": "#b3b3b3"
      } ]
    }, {
      "featureType": "road.highway",
      "elementType": "geometry.fill",
      "stylers": [ {
        "color": "#ffffff"
      } ]
    }, {
      "featureType": "road.local",
      "elementType": "geometry.fill",
      "stylers": [ {
        "visibility": "on"
      }, {
        "color": "#ffffff"
      }, {
        "weight": 1.8
      } ]
    }, {
      "featureType": "road.local",
      "elementType": "geometry.stroke",
      "stylers": [ {
        "color": "#d7d7d7"
      } ]
    }, {
      "featureType": "poi",
      "elementType": "geometry.fill",
      "stylers": [ {
        "visibility": "on"
      }, {
        "color": "#ebebeb"
      } ]
    }, {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [ {
        "color": "#a7a7a7"
      } ]
    }, {
      "featureType": "road.arterial",
      "elementType": "geometry.fill",
      "stylers": [ {
        "color": "#ffffff"
      } ]
    }, {
      "featureType": "road.arterial",
      "elementType": "geometry.fill",
      "stylers": [ {
        "color": "#ffffff"
      } ]
    }, {
      "featureType": "landscape",
      "elementType": "geometry.fill",
      "stylers": [ {
        "visibility": "on"
      }, {
        "color": "#BBC9D7"
      } ]
    }, {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [ {
        "color": "#696969"
      } ]
    }, {
      "featureType": "administrative",
      "elementType": "labels.text.fill",
      "stylers": [ {
        "visibility": "on"
      }, {
        "color": "#737373"
      } ]
    }, {
      "featureType": "poi",
      "elementType": "labels.icon",
      "stylers": [ {
        "visibility": "off"
      } ]
    }, {
      "featureType": "poi",
      "elementType": "labels",
      "stylers": [ {
        "visibility": "off"
      } ]
    }, {
      "featureType": "road.arterial",
      "elementType": "geometry.stroke",
      "stylers": [ {
        "color": "#d6d6d6"
      } ]
    }, {
      "featureType": "road",
      "elementType": "labels.icon",
      "stylers": [ {
        "visibility": "off"
      } ]
    }, {}, {
      "featureType": "poi",
      "elementType": "geometry.fill",
      "stylers": [ {
        "color": "#dadada"
      } ]
    } ],
  }
  var mapElement = document.getElementById( 'contact-map' );
  var map = new google.maps.Map( mapElement, mapOptions );

  var contentString = '<strong>TU Kaiserslautern</strong>'+
        '<p>Office 438, Building 34<br />4th floor</p>'+
        '<p>+49 (0)631 205 30 71</p>';


  var infowindow = new google.maps.InfoWindow({
    content: contentString,
    maxWidth: 200
  });

  marker = new google.maps.Marker( {
    icon: '/images/pin.png',
    position: new google.maps.LatLng( 49.4249421107917, 7.752746314819319 ),
    map: map
  } );

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
  setTimeout(function() {
    infowindow.open(map, marker);
  }, 500);

  // google.maps.event.addDomListener(window, "resize", function() {
  //  var center = map.getCenter();
  //  google.maps.event.trigger(map, "resize");
  //  map.setCenter(center);
  // });
}
}
