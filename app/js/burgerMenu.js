const burgerMenu = () => {
  const button = document.querySelector("nav>button");
  const quit = document.querySelector("#menu>button");
  const ref = document.querySelectorAll("#menu>a");
  const menu = document.querySelector("#menu");
  button.addEventListener("click", () => {
    menu.style.display = "block";
  });
  quit.addEventListener("click", () => {
    menu.style.display = "none";
  });
  ref.forEach((item) =>
    item.addEventListener("click", () => {
      menu.style.display = "none";
    })
  );
};
export default burgerMenu;
