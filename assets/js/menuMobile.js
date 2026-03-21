document.addEventListener("DOMContentLoaded", (event) => {
  let mobileBtn = document.querySelector(".navbar__mobile-btn");
  let mobileMenu = document.querySelector(".navbar__mobile-list");

  //FUNCION PARA MOSTRAR Y OCULTAR MENU MOBILE RESPONSIVE
  mobileBtn.addEventListener("click", () => {
    let menuOpen = document.querySelector(".menu__open");

    if (!menuOpen) {
      mobileMenu.style.display = "block";
      mobileMenu.classList.add("menu__open");
    } else {
      mobileMenu.style.display = "none";
      mobileMenu.classList.remove("menu__open");
    }
  });

  //FUNCION PARA MOSTRAR Y OCULTAR SUBMENUS DEL MENU MOBILE
  const subMenu = (boton, submenu, className) => {
    boton.addEventListener("click", () => {
      let drop = document.querySelector("." + className);

      if (!drop) {
        submenu.style.display = "block";
        submenu.classList.add(className);
      } else {
        submenu.style.display = "none";
        submenu.classList.remove(className);
      }
    });
  };

  //PRIMER SUBMENU
  let dropDown1Btn = document.querySelector("#icon1");
  let dropDown1SubMenu = document.querySelector("#submenu1");

  //SEGUNDO SUBMENU
  let dropDown2Btn = document.querySelector("#icon2");
  let dropDown2SubMenu = document.querySelector("#submenu2");

  //EJECUTAR FUNCIONALIDAD
  subMenu(dropDown1Btn, dropDown1SubMenu, "drop1");
  subMenu(dropDown2Btn, dropDown2SubMenu, "drop2");

  //FUNCION PARA MOSTRAR Y OCULTAR EL BOTON MOBILE REDIMENSION DE PANTALLA
  window.addEventListener("resize", () => {
    let win = parseFloat(document.body.clientWidth);

    if (win > 1024) {
      mobileMenu.style.display = "none";
      mobileMenu.classList.remove("menu__open");
    }
  });
});
