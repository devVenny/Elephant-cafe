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

// function displayItems(filteredData) {
//   const lsData = localStorage.getItem(CATEGORY__KEYNAME);
//   const parsedLsData = JSON.parse(lsData);
//   parsedLsData.forEach((item) => {
//     const menu = `
//   <a
//     href="#"
//     class="linkOverlay__primary"
//   >
//     <div class="menus__image drinks__image"></div>
//     <div class="menus__name">${item.name}<span class="menus__temp">${item.temp[0]}</span></div>
//   </a>`;
//   });
// }

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
        location.href = `/menuLinks/${category}.html`;
        const filteredData = items.filter((item) => item.category === category);
        setItemsOnLs(filteredData);
      });
    });
  })
  .catch(console.log("Shit!!"));

// loadProducts()
//   .then((items) => {
//     linkContainers.forEach((item) => {
//       item.addEventListener("click", function (e) {
//         const target = e.target;
//         const dataset = target.parentNode.dataset;
//         const className = e.target.className;
//         const category = dataset.category;
//         const menusContainerData =
//           target.parentNode.parentNode.parentNode.dataset.container;
//         if (className === "link-container") {
//           return;
//         }
//         // location.href = `/menuLinks/${category}.html`;
//         const filteredData = items.filter((item) => item.category === category);
//         linkContainers.forEach((item) => {
//           const eachContainer = item.parentNode.dataset.container;
//           console.log(item.parentNode);
//         });
//         setItemsOnLs(filteredData);
//       });
//     });
//   })
//   .catch(console.log("Shit!!"));
