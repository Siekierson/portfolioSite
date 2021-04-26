import { frontIcons, backIcons, toolsIcons } from "./iconsConfig";
const categories = document.querySelectorAll(".category>div");
const front = frontIcons.map(
  (item) => `
<div class="iconContainer"><img src="${item.photoSrc}" alt="technologyLogo"/></div>
`
);
const addIcons = () => {
  //   categories.innerHTML = front;
  console.log(front);
};
export default addIcons;
