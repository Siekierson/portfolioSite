import { frontIcons, backIcons, toolsIcons } from "./iconsConfig.js";
const addIcons = () => {
  const data = [frontIcons, backIcons, toolsIcons];
  const categories = document.querySelectorAll(".category>div");
  const dataToString = data.map((el) =>
    el
      .map(
        (item) =>
          `<div class="iconContainer" onMouseOver="this.style.backgroundColor='${item.color}'"
          onMouseOut="this.style.backgroundColor='transparent'"><img src="${item.photoSrc}" alt="technologyLogo" /><h3>${item.name}</h3></div>`
      )
      .join("")
  );
  categories.forEach((item, index) => (item.innerHTML = dataToString[index]));
};
export default addIcons;
