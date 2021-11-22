const openMenu = document.querySelector(".open-header-menu");
const closeMenu = document.querySelector(".close-header-menu");
const headerMenu = document.querySelector(".header-menu");

openMenu.addEventListener("click", function () {
  headerMenu.style.display = "flex";
  openMenu.style.display = "none";
  closeMenu.style.display = "block";
});
closeMenu.addEventListener("click", function () {
  headerMenu.style.display = "none";
  openMenu.style.display = "block";
  closeMenu.style.display = "none";
});

// //navigation bar menu
// const menus = document.querySelectorAll(".menu");

// headerMenu.addEventListener("click", function (event) {
//   const clicked = event.target.closest(".menu");
//   console.log(clicked);

//   clicked.classList.add("active-menu");
// });

// //jangan begini karena akan lemot ketika menunya banyak
// // menus.forEach((menu) => {
// //   menu.addEventListener("click", function () {
// //     menu.classList.add;
// //   });
// });
