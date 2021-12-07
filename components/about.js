"use strict";

// const images = [
//   "about-bg1.jpeg",
//   "about-bg2.jpeg",
//   "about-bg3.jpeg",
//   "about-bg4.jpeg",
// ];

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

const imageWrapper = document.querySelector(".image-wrapper").children;
const imageLength = imageWrapper.length;

let index = 0;
const CLASSNAME__SHOW = "show";

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
  }
  imageWrapper[index].classList.add(CLASSNAME__SHOW);
}
