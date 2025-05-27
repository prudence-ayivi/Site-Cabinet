// Cacher le topbar au scroll
let lastScroll = 0;
const topbar = document.getElementById("topbar");

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  if (currentScroll > lastScroll && currentScroll > 80) {
    topbar.classList.add("hidden");
  } else {
    topbar.classList.remove("hidden");
  }
  lastScroll = currentScroll;
});

// Afficher/masquer le menu mobile
const hamburgerBtn = document.getElementById("hamburger-btn");
const mobileMenu = document.getElementById("mobile-menu");

hamburgerBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// /**
//    * Init swiper sliders
//    */
//   function initSwiper() {
//     document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
//       let config = JSON.parse(
//         swiperElement.querySelector(".swiper-config").innerHTML.trim()
//       );

//       if (swiperElement.classList.contains("swiper-tab")) {
//         initSwiperWithCustomPagination(swiperElement, config);
//       } else {
//         new Swiper(swiperElement, config);
//       }
//     });
//   }

//   window.addEventListener("load", initSwiper);

// new Swiper(".mySwiper", {
//     loop: true,
//     speed: 500,
//     autoplay: {
//       delay: 3500,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//   });

  // Slider Desktop
  new Swiper(".swiper-desktop", {
    loop: true,
    autoplay: {
      delay: 4000,
    },
    pagination: {
      el: ".swiper-desktop .swiper-pagination",
      clickable: true,
    },
  });

  // Slider Mobile
  new Swiper(".swiper-mobile", {
    loop: true,
    autoplay: {
      delay: 4000,
    },
    pagination: {
      el: ".swiper-mobile .swiper-pagination",
      clickable: true,
    },
  });

    // var swiper = new Swiper(".mySwiper", {
    //   slidesPerView: 3,
    //   spaceBetween: 30,
    //   pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    //   },
    // });

//   const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   direction: 'vertical',
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

// });


// // Sticky navbar & hide topbar on scroll
// const topbar = document.getElementById('topbar');
// const navbar = document.getElementById('main-navbar');
// let lastScroll = 0;
// window.addEventListener('scroll', () => {
//   if (window.scrollY > 60) {
//     navbar.classList.add('fixed', 'top-0', 'left-0', 'w-full', 'z-50');
//     if (window.innerWidth < 1024) topbar.style.display = 'none';
//   } else {
//     navbar.classList.remove('fixed', 'top-0', 'left-0', 'w-full', 'z-50');
//     topbar.style.display = '';
//   }
// });

// // Hamburger menu toggle
// const hamburgerBtn = document.getElementById('hamburger-btn');
// const mobileMenu = document.getElementById('mobile-menu');
// hamburgerBtn?.addEventListener('click', () => {
//   mobileMenu.classList.toggle('hidden');
// });


// Carousel témoignages (pagination sur mobile)
// const testiCarousel = document.getElementById('testimonials-carousel');
// const testiPagination = document.getElementById('testimonials-pagination');
// let testiIndex = 0;
// function updateTesti() {
//   if (window.innerWidth < 1024) {
//     Array.from(testiCarousel.children).forEach((el, i) => {
//       el.style.display = (i === testiIndex) ? '' : 'none';
//     });
//     // Pagination
//     testiPagination.innerHTML = '';
//     for (let i = 0; i < testiCarousel.children.length; i++) {
//       const dot = document.createElement('span');
//       dot.className = 'inline-block h-2 w-2 mx-1 rounded-full ' + (i === testiIndex ? 'bg-green-600' : 'bg-gray-400');
//       dot.onclick = () => { testiIndex = i; updateTesti(); };
//       testiPagination.appendChild(dot);
//     }
//   } else {
//     Array.from(testiCarousel.children).forEach(el => el.style.display = '');
//     testiPagination.innerHTML = '';
//   }
// }
// window.addEventListener('resize', updateTesti);
// updateTesti();