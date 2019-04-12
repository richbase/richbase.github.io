$('#d').change(enableBtn);
$('.input').blur(enableBtn);

function enableBtn() {
  if ($('#d').is(':checked') == false || $('.input-field').parent('.input-wrap').hasClass('invalid') == true || $('.input').val().length < 2) {
    $("#confirm").prop("disabled", true);
  } else {
    $("#confirm").prop("disabled", false);
  }
}
enableBtn();


google.maps.event.addDomListener(window, 'load', init);
function init() {
  var mapOptions = {
    // How zoomed in you want the map to start at (always required)
    zoom: 11,
    // The latitude and longitude to center the map (always required)
    center: new google.maps.LatLng(24.5885, 25.9069), // New York

    // How you would like to style the map. 
    // This is where you would paste any style found on Snazzy Maps.
    styles: [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"simplified"},{"gamma":"1.00"}]},{"featureType":"administrative.country","elementType":"labels.text.fill","stylers":[{"lightness":"-53"},{"color":"#535353"}]},{"featureType":"administrative.province","elementType":"labels.text.fill","stylers":[{"color":"#ffe8e8"},{"saturation":"100"},{"lightness":"-14"}]},{"featureType":"administrative.locality","elementType":"labels","stylers":[{"color":"#ee3131"}]},{"featureType":"administrative.neighborhood","elementType":"labels","stylers":[{"color":"#e57878"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"visibility":"simplified"},{"lightness":"65"},{"saturation":"-100"},{"hue":"#ff0000"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"visibility":"simplified"},{"saturation":"-100"},{"lightness":"80"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.attraction","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#dddddd"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway.controlled_access","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#dddddd"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#e7c8c8"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#ee3131"},{"saturation":"-100"}]},{"featureType":"transit.station","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"transit.station","elementType":"labels.text.fill","stylers":[{"color":"#ee3131"},{"visibility":"simplified"}]},{"featureType":"transit.station","elementType":"labels.icon","stylers":[{"hue":"#ff0000"}]},{"featureType":"water","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#e3e3e3"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#ee3131"}]}]
  };
  // Get the HTML DOM element that will contain your map 
  // We are using a div with id="map" seen below in the <body>
  var mapElement = document.getElementById('map');
  // Create the Google Map using our element and options defined above
  var map = new google.maps.Map(mapElement, mapOptions);
  // Let's also add a marker while we're at it
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(40.6700, -73.9400),
    map: map,
    title: 'RICHBASE group'
  });
}