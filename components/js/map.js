const mapBtn = document.querySelector('.expand-map');
const mapContainer = document.querySelector('.map');

mapBtn.addEventListener('click', function() {
  mapContainer.classList.toggle('large-map');
  if(mapContainer.classList.contains('large-map')) {
    mapBtn.innerHTML = `<i class="fas fa-times"></i>`;
  }else {
    mapBtn.innerHTML = `<i class="fas fa-expand-arrows-alt"></i>`;
  }
});
