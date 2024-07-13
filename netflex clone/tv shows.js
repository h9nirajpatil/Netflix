
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
          $(".netflix-navbar").css("background" , "#0C0C0C");
        }
  
        else{
            $(".netflix-navbar").css("background" , "transparent");  	
        }
    });
  
  })
  
  
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
  