const burgerMenu = () => {
  const button = document.querySelector("nav>button");
  const quit = document.querySelector("#menu>button");
  const ref = document.querySelectorAll("#menu>a");
  const menu = document.querySelector("#menu");
  function outAnime() {
    menu.classList.add("slideout");
    setTimeout(() => {
      menu.classList.remove("slideout");
      menu.style.display = "none";
    }, 1000);
  }
  button.addEventListener("click", () => {
    menu.style.display = "block";
  });
  quit.addEventListener("click", () => {
    outAnime();
  });
  ref.forEach((item) =>
    item.addEventListener("click", () => {
      menu.style.display = "none";
    })
  );
};
export default burgerMenu;
