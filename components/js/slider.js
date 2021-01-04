$('.owl-carousel').owlCarousel({
  autoWidth:true,
  loop:true,
  dots:false,
  autoplay:true,
  margin:10,
  items:1,
});

const preloader = document.querySelector('.preloader-container'); 
  window.addEventListener('load', function() {
    setInterval(loader, 0);
    function loader() {
      preloader.style.display = 'none';
      clearInterval();
    }
  });
