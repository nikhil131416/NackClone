//carousel controlled by left and right arrows
const carousel = document.querySelector(".carousel");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const images = document.querySelectorAll(".carousel-image");

let currentIndex = 0;
let prevIndex;

const totalImages = Object.keys(images).length;
const imageWidth = images[0].getBoundingClientRect().width + 40;


let moveCarouselRight = () => {
  prevIndex = currentIndex;
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  carousel.style.transform = `translateX(-${imageWidth}px)`;
  carousel.insertBefore(images[currentIndex], carousel.firstChild);

  setTimeout(() => {
    carousel.style.transform = "";
    carousel.classList.add("sliding-transition");
  }, 10);

  setTimeout(() => {
    carousel.classList.remove("sliding-transition");
  }, 490);
};

let moveCarouselLeft = () => {
  carousel.classList.add("sliding-transition");

  prevIndex = currentIndex;
  currentIndex = (currentIndex + 1) % totalImages;

  carousel.style.transform = `translateX(-${imageWidth}px)`;

  setTimeout(() => {
    carousel.appendChild(images[prevIndex]);
    carousel.classList.remove("sliding-transition");
    carousel.style.transform = "";
  }, 500);
};


rightArrow.addEventListener("click", moveCarouselRight);
leftArrow.addEventListener("click", moveCarouselLeft);
setInterval(moveCarouselLeft, 5000);



//carousel controlled by navigators
const navigators = document.querySelectorAll(".navigators div");
const carouselNav = document.querySelector(".section1-container");

navigators.forEach((navigator, index) => {
  navigator.addEventListener("click", () => {
    navigators.forEach((navigator) => {
      navigator.classList.remove("active");
    });
    navigator.classList.add("active");
    carouselNav.style.transform = `translateX(-${window.innerWidth* index}px)`;
  });
});



//show and hide ham menu
const openHam = document.querySelector(".ham");
const closeHam = document.querySelector(".close-ham-menu");
const hamMenu = document.querySelector(".ham-menu");
const body = document.querySelector("body");


openHam.addEventListener("click", () => {
  hamMenu.classList.toggle("ham-active");
  body.style.overflowY = "hidden";
});

closeHam.addEventListener("click", () => {
  hamMenu.classList.toggle("ham-active");
  body.style.overflowY = "scroll";
});



//change nav color and background color on scroll
const nav = document.querySelector("nav");
const logo = document.querySelector("#logo img");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    nav.classList.add("nav-scrolled");
    logo.src = "images/logo-black.webp";

  } else {
    nav.classList.remove("nav-scrolled");
    logo.src = "images/logo-white.webp";
  }
});


const drop1 = document.querySelector("nav .dropdown-1");
const drop2 = document.querySelector("nav .dropdown-2");
const drop1Parent = document.querySelector("nav .dropdown-parent-1");
const drop2Parent = document.querySelector("nav .dropdown-parent-2");


drop1Parent.addEventListener("click", () => {
  drop1.classList.toggle("show-dropdown");
  drop2.classList.remove("show-dropdown");
});

drop2Parent.addEventListener("click", () => {
  drop2.classList.toggle("show-dropdown");
  drop1.classList.remove("show-dropdown");
});
