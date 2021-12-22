"use strict";

const linkContainer = document.querySelector(".link-container");

function displayItems() {
  const getMenuLS = localStorage.getItem(CATEGORY__KEYNAME);
  const parsedMenu = JSON.parse(getMenuLS);
  if (parsedMenu !== null || parsedMenu.length <= 0) {
    const map = parsedMenu.map((item) => {
      const menu = `
          <a
            href="#"
            class="linkOverlay__primary"
          >
            <div class="menus__image drinks__image"></div>
            <div class="menus__text">
              <div class="menus__name">${item.name}</div>
              <div class="temps">
              <div class="menus__temp hot">${
                item.temp[0] ? item.temp[0] : "-"
              }</div>
              <div class="menus__temp cold">${
                item.temp[1] ? item.temp[1] : "-"
              }</div>
              </div>
          </div>
          </a>`;
      return menu;
    });
    linkContainer.innerHTML = map.join("");
  }
}
displayItems();
