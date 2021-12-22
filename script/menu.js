"use strict";

const linkContainer = document.querySelector(".link-container");

function displayItems() {
  const getMenuLS = localStorage.getItem(CATEGORY__KEYNAME);
  const parsedMenu = JSON.parse(getMenuLS);
  const map = parsedMenu.map((item) => {
    const menu = `
        <a
          href="#"
          class="linkOverlay__primary"
        >
          <div class="menus__image drinks__image"></div>
          <div class="menus__name">
            <div class="menus__name">${item.name}</div>  
            <div class="menus__temp">${item.temp[0]}</div>
        </div>
        </a>`;
    return menu;
  });
  linkContainer.innerHTML = map.join("");
}
displayItems();
