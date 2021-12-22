"use strict";

// Manu category로 이동
const linkContainers = document.querySelectorAll(".link-container");
const menuTitle = document.querySelector(".menus-container__title");
// const linkContainer = document.querySelector(".link-container");

const CATEGORY__KEYNAME = "category";

// Json 형태의 데이터 다운
function loadProducts() {
  return fetch("../data/data.json")
    .then((response) => response.json())
    .then((datas) => datas.menus);
}

function setItemsOnLs(filteredData) {
  localStorage.setItem(CATEGORY__KEYNAME, JSON.stringify(filteredData));
}

loadProducts()
  .then((items) => {
    linkContainers.forEach((item) => {
      item.addEventListener("click", function (e) {
        const target = e.target;
        const dataset = target.parentNode.dataset;
        const className = e.target.className;
        const category = dataset.category;

        if (className === "link-container") {
          return;
        }
        location.href = `/menuLinks/coffee.html`;
        const filteredData = items.filter((item) => item.category === category);
        setItemsOnLs(filteredData);
      });
    });
  })
  .catch(console.log("Shit!!"));
