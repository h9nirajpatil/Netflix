document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector('.carousel');
    const carouselInner = document.querySelector('.carousel-inner');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const itemWidth = carouselItems[0].offsetWidth + 20; // Adjusted for margin
  
    let currentIndex = 0;
  
    // Function to move the carousel to the next item
    function moveToNext() {
      if (currentIndex < carouselItems.length - 1) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      carouselInner.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }
  
    // Automatic movement of carousel
    setInterval(moveToNext, 3000); // Change slide every 3 seconds
  });
  
function position(id){
  var card = document.getElementsByClassName('card')[id];
  // card.style.transform = 'scale(1.5)';
  console.log(id)
  }
  document.addEventListener('DOMContentLoaded', function() {
    const profileButton = document.querySelector('.profile-button');
    const dropdownMenu = document.querySelector('.dropdown-menu');
  
    profileButton.addEventListener('click', function() {
      profileButton.classList.toggle('active');
      dropdownMenu.classList.toggle('show');
    });
  
    document.addEventListener('click', function(event) {
      if (!profileButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
        profileButton.classList.remove('active');
        dropdownMenu.classList.remove('show');
      }
    });
  });
  