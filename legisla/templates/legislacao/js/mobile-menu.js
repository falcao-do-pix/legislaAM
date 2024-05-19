function sideBarMenu() {
   const sideBar = document.querySelector(".sidebar-container");
   sideBar.classList.toggle("sidebar-active");
}

const mobileMenu = document.querySelector(".mobile-menu");
mobileMenu.addEventListener("click", sideBarMenu);
