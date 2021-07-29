function initMap() {
  const brewBarberista = { lat: 53.3810574, lng: -6.1741988 };
  const map = new google.maps.Map(document.querySelector('.map-container'), {
    zoom: 15,
    center: brewBarberista,
  });
  new google.maps.Marker({
    position: brewBarberista,
    map,
    title: 'Brew Barberista',
    icon: 'static/images/icons/pin-brew-barberista.png'
  });
}