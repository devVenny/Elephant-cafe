"use strict";

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

const imageWrapper = document.querySelector(".image-wrapper").children;
const imageLength = imageWrapper.length;
const dotControl = document.querySelector(".slider-dot-control").children;

let index = 0;
const CLASSNAME__SHOW = "show";
const CLASSNAME__ACTIVE = "active";

prev.addEventListener("click", () => {
  handleClick("prev");
});
next.addEventListener("click", () => {
  handleClick("next");
});

function handleClick(whichBtn) {
  if (whichBtn === "prev") {
    index--;
    if (index < 0) {
      index = imageLength - 1;
    }
  } else {
    index++;
    if (index > imageLength - 1) {
      index = 0;
    }
  }
  for (let i = 0; i < imageLength; i++) {
    imageWrapper[i].classList.remove(CLASSNAME__SHOW);
    dotControl[i].classList.remove(CLASSNAME__ACTIVE);
  }
  imageWrapper[index].classList.add(CLASSNAME__SHOW);
  dotControl[index].classList.add(CLASSNAME__ACTIVE);
}

// parallax scroll
/* moving leaf up and down */

const aboutTop = document.getElementById("about").getBoundingClientRect().top;
const leafBlue = document.querySelector(".leaf-blue");
const leafGreen = document.querySelector(".leaf-green");
const leafRedBig = document.querySelector(".leaf-red--big");
const leafRedSmall = document.querySelector(".leaf-red--small");

window.addEventListener("scroll", parallaxFunc);

function parallaxFunc() {
  const scrollY = window.scrollY + aboutTop;
  leafBlue.style.right = `${scrollY * 0.55}px`;
  leafGreen.style.top = `${scrollY * 0.1}px`;
  leafGreen.style.left = `${scrollY * 0.45}px`;
  leafRedBig.style.top = `${scrollY * 0.1}px`;
  leafRedBig.style.right = `${scrollY * 0.5}px`;
  leafRedSmall.style.left = `${scrollY * 0.5}px`;
}
