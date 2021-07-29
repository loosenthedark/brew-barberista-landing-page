function initMap() {
  const brewBarberista = { lat: 53.3811089, lng: -6.1654779 };
  const map = new google.maps.Map(document.querySelector('.map-container'), {
    zoom: 13,
    center: brewBarberista,
  });
  new google.maps.Marker({
    position: brewBarberista,
    map,
    title: 'Brew Barberista',
    icon: 'static/images/icons/pin-brew-barberista.png'
  });
}