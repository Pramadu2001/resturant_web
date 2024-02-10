let menu = document.querySelector('#menu-bars');
let nav = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    nav.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header .navbar a');



window.onscroll = () => {
    menu.classList.remove('fa-times');
    nav.classList.remove('active');

    section.forEach(sec => {
        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active');
            });

            document.querySelector(`header .navbar a[href*='${id}']`).classList.add('active');
        }
    });
};


document.querySelector('#search').onclick = () => {
    document.querySelector('#form').classList.toggle('active');
}

document.querySelector('#close').onclick = () => {
    document.querySelector('#form').classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
      loop:true,
  });

  var swiper = new Swiper(" .review-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
      loop:true,
      breakpoints:{
        0:{
          slidesPerView: 1,
        },
        640:{
          slidesPerView: 2,
        },
        768:{
          slidesPerView: 2,
        },
        1024:{
          slidesPerView: 3,
        },
      },
  });

  function loader() {
    let loaderContainer = document.querySelector('.loader-container');
    loaderContainer.classList.add('fade-out');
  
    // After a certain duration, you might want to remove the loader element
    setTimeout(() => {
      loaderContainer.style.display = 'none';
    }, 1000); // Adjust the time based on your transition duration
  }
  
  function fadeOut() {
    // Set an interval and store its ID
    let intervalId = setInterval(loader, 3000);
  
    // Set a timeout to clear the interval after 3000 ms (same as the interval)
    setTimeout(() => {
      clearInterval(intervalId);
    }, 3000);
  }
  
  window.onload = fadeOut;
  
  