document.addEventListener("DOMContentLoaded", (event) => {
  //FUNCION DE SLIDER DE LA MARQUESINA
  let marquee = (selectorList, speed) => {
    const list = document.querySelector(selectorList);

    let i = 0;

    setInterval(() => {
      list.style.marginLeft = `-${i}px`;

      if (i > list.clientWidth) {
        i = 0;
      }

      i = i + speed;
    }, 0);
  };

  marquee(".marquee__list", 1);
});
