"use strict";

// const portfolioText1 = document.querySelectorAll(
//   ".section-portfolio__title--text-2"
// );

// const mediaQuery = window.matchMedia("(max-width:1100px)");

// if (mediaQuery.matches) {
//   portfolioText1.forEach((element) => {
//     element.innerHTML = "My 2nd Project Transparent Text";
//   });
// }

window.addEventListener("scroll", reveal);

function reveal() {
  let reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top;
    let revealpoint = 150;

    if (revealTop < windowHeight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

// Changing Testimonials

const arrowLeft = document.querySelector(
  ".section-experience__testimonals--arrow-left"
);
const arrowRight = document.querySelector(
  ".section-experience__testimonals--arrow-right"
);

const testimonial = document.querySelector(
  ".section-experience__testimonals--img"
);

let currentImageNum = 1;
arrowRight.addEventListener("click", () => {
  if (currentImageNum < 8) {
    currentImageNum += 1;
    testimonial.src = `images/testimonials/testimonial-${currentImageNum}.png`;
  } else {
    currentImageNum = 1;
    testimonial.src = `images/testimonials/testimonial-${currentImageNum}.png`;
  }
});

arrowLeft.addEventListener("click", () => {
  if (currentImageNum > 1) {
    currentImageNum -= 1;
    testimonial.src = `images/testimonials/testimonial-${currentImageNum}.png`;
  } else {
    currentImageNum = 8;
    testimonial.src = `images/testimonials/testimonial-${currentImageNum}.png`;
  }
});
