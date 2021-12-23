"use strict";

const linkContainer = document.querySelector(".link-container");
const containerTitle = document.querySelector(".menus-container__title");

// Chage Container title
function changeTitle(categoryTitle) {
  containerTitle.innerHTML = `
  <span class="middle-heading">Drinks</span>
  <span class="small-heading"> > ${capitalizeFirstLetter(
    categoryTitle
  )} </span>`;
}

// Capitalize first letter
function capitalizeFirstLetter(categoryTitle) {
  return categoryTitle.charAt(0).toUpperCase() + categoryTitle.slice(1);
}

// Populate UI
function displayItems() {
  const getMenuLS = localStorage.getItem(CATEGORY__KEYNAME);
  console.log(getMenuLS);
  const parsedMenu = JSON.parse(getMenuLS);
  const categoryTitle = parsedMenu[0].category;
  if (parsedMenu !== null || parsedMenu.length <= 0) {
    const map = parsedMenu.map((item) => {
      const menu = `
          <a
            href="#"
            class="linkOverlay__primary"
          >
            <div class="menus__image"></div>
            <div class="menus__text">${item.name}
          </div>
          </a>`;
      return menu;
    });
    linkContainer.innerHTML = map.join("");
  }
  changeTitle(categoryTitle);
}
displayItems();
