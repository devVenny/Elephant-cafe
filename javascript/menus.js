"use strict";

const linkContainers = document.querySelectorAll(".link-container");
const categorySideBar = document.getElementById("menu-category");
const CATEGORY__KEYNAME = "category";

// Fetch menu data
function loadProducts() {
  return fetch("../data/data.json")
    .then((response) => response.json())
    .then((datas) => datas.menus);
}

// Save filtered data to localstorage
function setItemsOnLs(filteredData) {
  localStorage.setItem(CATEGORY__KEYNAME, JSON.stringify(filteredData));
}

// // Populat UI
// function populateUI() {
//   const getMenuLS = localStorage.getItem(CATEGORY__KEYNAME);
//   console.log(getMenuLS);
// }

// Filter data
loadProducts()
  .then((items) => {
    // main menu click event
    linkContainers.forEach((item) => {
      item.addEventListener("click", function (e) {
        const target = e.target;
        const dataset = target.parentNode.dataset;
        const className = e.target.className;
        const category = dataset.category;

        if (className === "link-container") {
          return;
        }
        location.href = `/menuLinks/menu.html`;
        const filteredData = items.filter((item) => item.category === category);
        setItemsOnLs(filteredData);
      });
    });

    // Side bar click event
    categorySideBar.addEventListener("click", function (e) {
      const dataFilter = e.target.dataset.filter;
      if (e.target.dataset.filter === undefined) {
        return;
      }
      location.href = `/menuLinks/menu.html`;
      const filteredData = items.filter((item) => item.category === dataFilter);
      setItemsOnLs(filteredData);
    });
  })
  .catch(console.log("Shit!!"));

// populateUI();
