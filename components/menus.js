"use strict";

// Manu category로 이동
const linkContainers = document.querySelectorAll(".link-container");

// Json 형태의 데이터 다운
function loadProducts() {
  return fetch("../data/data.json")
    .then((response) => response.json())
    .then((datas) => datas.drinks);
}

function setItemsOnLs(items, category) {
  const filteredData = items.filter((item) => item.category === category);
  console.log(filteredData);
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
        // location.href = `/menuLinks/${category}.html`;
        setItemsOnLs(items, category);
      });
    });
  })
  .catch(console.log("Shit!!"));
